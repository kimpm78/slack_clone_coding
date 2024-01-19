import Modal from '@components/Modal';
import useInput from '@hooks/useInput';
import { Button, Input, Label } from '@pages/SignUp/styles';
import { IChannel, IUser } from '@typings/db';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { FC, useCallback } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import useSWR from 'swr';

interface Props {
  show: boolean;
  onCloseModal: () => void;
  setShowCreateChannelModal: (flag: boolean) => void;
}

const CreateChannelModal: FC<Props> = ({ show, onCloseModal, setShowCreateChannelModal }) => {
  const [newChannel, onChangeNewChannel, setNewChannel] = useInput('');
  const { workspace, channel } = useParams<{ workspace: string; channel: string }>();
  // SWR v1 になって revalidateからmutateへ変更されている（2024.1.9）
  const {
    data: userData,
    error,
    mutate,
  } = useSWR<IUser | false>(`http://localhost:3095/api/users`, fetcher, {
    dedupingInterval: 2000, // 2秒間隔
  });
  // 채널 받아오게 하는법
  const { data: channelData, mutate: mutateChannel } = useSWR<IChannel[]>(
    userData ? `/api/workspaces/${workspace}/channels` : null,
    fetcher,
  );

  const onCreateChannel = useCallback(
    (e) => {
      e.preventDefault();
      axios
        .post(
          `/api/workspaces/${workspace}/channels`,
          {
            name: newChannel,
          },
          { withCredentials: true },
        )
        .then((response) => {
          setShowCreateChannelModal(false);
          mutateChannel();
          setNewChannel('');
        })
        .catch((error) => {
          console.dir(error);
          toast.error(error.response?.data, { position: 'bottom-center' });
        });
    },
    [newChannel],
  );

  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <form onSubmit={onCreateChannel}>
        <Label id="channel-label">
          <span>チャンネル</span>
          <Input
            id="channel"
            value={newChannel}
            onChange={onChangeNewChannel}
            placeholder="チャンネル名を入力してください。
          "
          />
        </Label>
        <Button type="submit">作成する</Button>
      </form>
    </Modal>
  );
};

export default CreateChannelModal;
