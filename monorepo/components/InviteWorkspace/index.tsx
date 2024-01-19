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
  setShowInviteWorkspaceModal: (flag: boolean) => void;
}

const InviteWorkspaceModal: FC<Props> = ({ show, onCloseModal, setShowInviteWorkspaceModal }) => {
  const { workspace } = useParams<{ workspace: string; channel: string }>();
  const [newMember, onChangeNewChannel, setNewMember] = useInput('');
  const { data: userData } = useSWR<IUser>('/api/users', fetcher);
  // チャンネルを取得
  const { mutate: revalidateMember } = useSWR<IChannel[]>(
    userData ? `http://localhost:3095/api/workspaces/${workspace}/members` : null,
    fetcher,
  );

  const onInviteMember = useCallback(
    (e) => {
      e.preventDefault();
      if (!newMember || !newMember.trim()) {
        return;
      }
      axios
        .post(`http://localhost:3095/api/workspaces/${workspace}/members`, {
          email: newMember,
        })
        .then(() => {
          revalidateMember();
          setShowInviteWorkspaceModal(false);
          setNewMember('');
        })
        .catch((error) => {
          console.dir(error);
          toast.error(error.response?.data, { position: 'bottom-center' });
        });
    },
    [newMember, workspace, revalidateMember, setShowInviteWorkspaceModal, setNewMember],
  );

  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <form onSubmit={onInviteMember}>
        <Label id="member-label">
          <span>メールアドレス</span>
          <Input id="member" value={newMember} onChange={onChangeNewChannel} />
        </Label>
        <Button type="submit">招待する</Button>
      </form>
    </Modal>
  );
};

export default InviteWorkspaceModal;
