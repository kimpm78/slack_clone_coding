import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router';
import { useLocation, NavLink } from 'react-router-dom';

import { IChannel, IUser } from '@typings/db';
import fetcher from '@utils/fetcher';
import useSWR from 'swr';

interface Props {
  channel: IChannel;
}

const EachChannel: FC<Props> = ({ channel }) => {
  const { workspace } = useParams<{ workspace?: string }>();
  const location = useLocation();
  const { data: userData } = useSWR<IUser>('/api/users', fetcher, {
    dedupingInterval: 2000, // 2秒間隔
  });
  const data = localStorage.getItem(`${workspace}-${channel.name}`) || 0;
  const { data: count, mutate } = useSWR<number>(
    userData ? `/api/workspaces/${workspace}/channels/${channel.name}/unreads?after=${data}` : null,
    fetcher,
  );

  useEffect(() => {
    if (location.pathname === `/workspace/${workspace}/channel/${channel.name}`) {
      mutate(0);
    }
  }, [mutate, location.pathname, workspace, channel]);

  return (
    <NavLink key={channel.name} className="selected" to={`/workspace/${workspace}/channel/${channel.name}`}>
      <span className={count !== undefined && count > 0 ? 'bold' : undefined}># {channel.name}</span>
      {count !== undefined && count > 0 && <span className="count">{count}</span>}
    </NavLink>
  );
};

export default EachChannel;
