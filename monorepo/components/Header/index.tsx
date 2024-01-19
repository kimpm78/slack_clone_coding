import {
  ToolbarSpacer,
  NavMiddleContainer,
  NavToolbar,
  NavContainerWrapper,
  LeftContainer,
  LeftContainerStart,
  LeftContainerEnd,
  HistoryButtons,
  SearchButton,
  NavSearchContainer,
  NavSearchText,
  RightContainer,
  RightMenu,
  ProfileImg,
  ProfileModal,
  LogOutButton,
} from './styles';

import React, { FC, useCallback, useEffect, useState } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HistoryIcon from '@mui/icons-material/History';
import SearchIcon from '@mui/icons-material/Search';

import gravater from 'gravatar';
import Menu from '@components/Menu';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import { Navigate, useParams } from 'react-router';
import axios from 'axios';
import useSocket from '@hooks/useSocket';
import { IChannel, IUser } from '@typings/db';
import { toast } from 'react-toastify';

const Header: FC = () => {
  const params = useParams<{ workspace?: string }>();
  const { workspace } = params;
  const [socket, disconnectSocket] = useSocket(workspace);
  const { data: userData, mutate: revalidateUser } = useSWR<IUser | false>('/api/users', fetcher);
  // チャンネルデータを受け取る
  const { data: channelData } = useSWR<IChannel[]>(userData ? `/api/workspaces/${workspace}/channels` : null, fetcher);

  const [showUserMenu, setShowUserMenu] = useState(false);

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

  // ユーザープロフィールを閉じる
  const onCloseUserProfile = useCallback((e) => {
    e.stopPropagation();
    setShowUserMenu(false);
  }, []);

  const onClickUserProfile = useCallback(() => {
    setShowUserMenu((prev) => !prev);
  }, []);

  if (!userData) {
    return <Navigate replace to="/login" />;
  }

  return (
    <div>
      <NavToolbar role="navigation" aria-orientation="horizontal" aria-label="履歴ナビゲーション">
        <ToolbarSpacer className="theme_background" />
        <NavContainerWrapper className="p-ia4_top_nav__container_wrapper">
          <LeftContainer className="p-ia4_top_nav__left_container" style={{ flexBasis: '391.2px' }}>
            <LeftContainerStart style={{ flexBasis: '280px' }}></LeftContainerStart>
            <LeftContainerEnd className="p-ia4_top_nav__left_container--end" style={{ flexBasis: '391.2px' }}>
              <div className="history_buttons">
                <HistoryButtons className="history_buttons__button" style={{ color: 'white' }} tabIndex={0}>
                  <ArrowBackIcon />
                </HistoryButtons>
                <HistoryButtons
                  className="c-button-unstyled p-ia4_history_buttons__button"
                  tabIndex={-1}
                  style={{ color: 'white' }}
                >
                  <ArrowForwardIcon />
                </HistoryButtons>
              </div>
              <div className="p-ia4_history_menu_button">
                <HistoryButtons
                  className="c-button-unstyled p-ia4_history_menu_button__button"
                  style={{ color: 'white' }}
                >
                  <HistoryIcon />
                </HistoryButtons>
              </div>
            </LeftContainerEnd>
          </LeftContainer>
          <NavMiddleContainer className="p-ia4_top_nav__middle_container">
            <NavSearchContainer className="p-top_nav__search__container">
              <SearchButton className="c-button-unstyled p-top_nav__search p-top_nav__search--mac" tabIndex={-1}>
                <div className="p-top_nav__search__icon p-top_nav__search__icon--advanced-search">
                  <SearchIcon style={{ color: 'white' }} />
                </div>
                <NavSearchText className="p-top_nav__search__text" id="search-text" style={{ color: 'white' }}>
                  Slack 内を検索する
                </NavSearchText>
              </SearchButton>
            </NavSearchContainer>
          </NavMiddleContainer>
        </NavContainerWrapper>
        <RightContainer>
          <RightMenu>
            <span onClick={onClickUserProfile}>
              <ProfileImg src={gravater.url(userData.email, { s: '28px', d: 'retro' })} alt={userData.email} />
              {showUserMenu && (
                <Menu style={{ right: 0, top: 38 }} show={showUserMenu} onCloseModal={onCloseUserProfile}>
                  <ProfileModal>
                    <img
                      src={gravater.url(userData.nickname, {
                        s: '36px',
                        d: 'retro',
                      })}
                      alt={userData.nickname}
                    />
                    <div>
                      <span id="profile-name">{userData.nickname}</span>
                      <span id="profile-active">Active</span>
                    </div>
                  </ProfileModal>
                  <LogOutButton onClick={onLogOut}>サインアウト</LogOutButton>
                </Menu>
              )}
            </span>
          </RightMenu>
        </RightContainer>
      </NavToolbar>
    </div>
  );
};

export default Header;
