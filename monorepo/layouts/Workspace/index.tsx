import React, { FC, useCallback, useEffect, useState } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';
import useSWR from 'swr';
import { toast, ToastContainer } from 'react-toastify';

import Menu from '@components/Menu';
import Modal from '@components/Modal';
import useInput from '@hooks/useInput';
import CreateChannelModal from '@components/CreateChannelModal';
import InviteWorkspaceModal from '@components/InviteWorkspace';
import InviteChannelModal from '@components/InviteChannelModal';
import DMList from '@components/DMList';
import ChannelList from '@components/ChannelList';

import {
  AddButton,
  Channels,
  Chats,
  ClientBrowser,
  ClientContainer,
  MenuScroll,
  Offscreen,
  WorkspaceButton,
  WorkspaceModal,
  WorkspaceName,
  Workspaces,
  WorkspaceWrapper,
} from '@layouts/Workspace/styles';

import fetcher from '@utils/fetcher';
import axios from 'axios';

import { Button, Input, Label } from '@pages/SignUp/styles';
import useSocket from '@hooks/useSocket';
import { IChannel, IUser } from '@typings/db';
import { useParams } from 'react-router';
import Header from '@components/Header';

const Channel = loadable(() => import('@pages/Channel'), {
  fallback: <div>Loading...</div>,
});
const DirectMessage = loadable(() => import('@pages/DirectMessage'), {
  fallback: <div>Loading...</div>,
});

const Workspace: FC = () => {
  const params = useParams<{ workspace?: string }>();
  const { workspace } = params;
  const [socket, disconnectSocket] = useSocket(workspace);
  const { data: userData, mutate: revalidateUser } = useSWR<IUser | false>('/api/users', fetcher);
  // チャンネルデータを受け取る
  const { data: channelData } = useSWR<IChannel[]>(userData ? `/api/workspaces/${workspace}/channels` : null, fetcher);

  const [showCreateWorkspaceModal, setShowCreateWorkspaceModal] = useState(false);
  const [showInviteWorkspaceModal, setShowInviteWorkspaceModal] = useState(false);
  const [showInviteChannelModal, setShowInviteChannelModal] = useState(false);
  const [showWorkspaceModal, setShowWorkspaceModal] = useState(false);
  const [showCreateChannelModal, setShowCreateChannelModal] = useState(false);
  const [newWorkspace, onChangeNewWorkspace, setNewWorkspace] = useInput('');
  const [newUrl, onChangeNewUrl, setNewUrl] = useInput('');

  // サインアウトの状態
  const onLogOut = useCallback(() => {
    axios
      .post('/api/users/logout')
      .then(() => {
        revalidateUser();
      })
      .catch((error) => {
        console.dir(error);
        toast.error(error.response?.data, { position: 'bottom-center' });
      });
  }, []);
  // 新しいワークスペースを作成する
  const onCreateWorkspace = useCallback(
    (e) => {
      e.preventDefault();
      if (!newWorkspace || !newWorkspace.trim()) {
        return;
      }
      if (!newUrl || !newUrl.trim()) {
        return;
      }
      axios
        .post(
          '/api/workspaces',
          {
            workspace: newWorkspace,
            url: newUrl,
          },
          {
            withCredentials: true,
          },
        )
        .then(() => {
          revalidateUser();
          setShowCreateWorkspaceModal(false);
          setNewWorkspace('');
          setNewUrl('');
        })
        .catch((error) => {
          console.log(error);
          // @https://www.npmjs.com/package/react-toastify トーストの機能
          toast.error(error.response?.data, { position: 'bottom-center' });
        });
    },
    [newWorkspace, newUrl],
  );

  useEffect(() => {
    if (channelData && userData && socket) {
      console.log(socket);
      socket.emit('login', {
        id: userData.id,
        channels: channelData.map((v) => v.id),
      });
    }
  }, [socket, channelData, userData]);

  useEffect(() => {
    return () => {
      disconnectSocket();
    };
  }, [workspace, disconnectSocket]);

  // ワークスペース追加の機能
  const onClickCreateWorkspace = useCallback(() => {
    setShowCreateWorkspaceModal(true);
  }, []);
  //モーダルをクローズ
  const onCloseModal = useCallback(() => {
    setShowCreateWorkspaceModal(false);
    setShowCreateChannelModal(false);
    setShowInviteWorkspaceModal(false);
    setShowInviteChannelModal(false);
  }, []);

  // ワークスペーストグル関数
  const toggleWorkspaceModal = useCallback(() => {
    setShowWorkspaceModal((prev) => !prev);
  }, []);
  // チャンネル追加の機能
  const onClickAddChannel = useCallback(() => {
    setShowCreateChannelModal(true);
  }, []);

  // ユーザーを招待する機能
  const onClickInviteWorkspace = useCallback(() => {
    setShowInviteWorkspaceModal(true);
  }, []);

  if (!userData) {
    return <Navigate replace to="/login" />;
  }

  return (
    <div className="p-client_container">
      <div className="p-ia4_client_container">
        <ClientContainer>
          <ClientBrowser>
            <div className="active-managed-focus-container" style={{ display: 'contents' }}>
              <Offscreen className="offscreen"></Offscreen>
              <Header />
              <WorkspaceWrapper>
                <Workspaces>
                  {userData?.Workspaces?.map((ws) => {
                    return (
                      <Link key={ws.id} to={`/workspace/${ws.url}/channel/General`}>
                        <WorkspaceButton>{ws.name.slice(0, 1).toUpperCase()}</WorkspaceButton>
                      </Link>
                    );
                  })}
                  <AddButton onClick={onClickCreateWorkspace}>+</AddButton>
                </Workspaces>
                <Channels>
                  <WorkspaceName onClick={toggleWorkspaceModal}>Slack</WorkspaceName>
                  <MenuScroll>
                    <Menu show={showWorkspaceModal} onCloseModal={toggleWorkspaceModal} style={{ top: 95, left: 80 }}>
                      <WorkspaceModal>
                        <h2>Slack</h2>
                        <button onClick={onClickInviteWorkspace}>ワークスペースにユーザー招待</button>
                        <button onClick={onClickAddChannel}>チャンネルを作成</button>
                        <button onClick={onLogOut}>サインアウト</button>
                      </WorkspaceModal>
                    </Menu>
                    <ChannelList />
                    <DMList />
                  </MenuScroll>
                </Channels>
                <Chats>
                  <Routes>
                    <Route path="/channel/:channel" element={<Channel />} />
                    <Route path="/dm/:id" element={<DirectMessage />} />
                  </Routes>
                </Chats>
              </WorkspaceWrapper>
              <Modal show={showCreateWorkspaceModal} onCloseModal={onCloseModal}>
                <form onSubmit={onCreateWorkspace}>
                  <Label id="workspace-label">
                    <span>ワークスペース名</span>
                    <Input id="workspace" value={newWorkspace} onChange={onChangeNewWorkspace} />
                  </Label>
                  <Label id="workspace-url-label">
                    <span>ワークスペースの URL</span>
                    <Input id="workspace" value={newUrl} onChange={onChangeNewUrl} />
                  </Label>
                  <Button type="submit">作成する</Button>
                </form>
              </Modal>
              <CreateChannelModal
                show={showCreateChannelModal}
                onCloseModal={onCloseModal}
                setShowCreateChannelModal={setShowCreateChannelModal}
              />
              <InviteWorkspaceModal
                show={showInviteWorkspaceModal}
                onCloseModal={onCloseModal}
                setShowInviteWorkspaceModal={setShowInviteWorkspaceModal}
              />
              <InviteChannelModal
                show={showInviteChannelModal}
                onCloseModal={onCloseModal}
                setShowInviteChannelModal={setShowInviteChannelModal}
              />
              <ToastContainer position="bottom-center" />
            </div>
          </ClientBrowser>
        </ClientContainer>
      </div>
    </div>
  );
};

export default Workspace;
