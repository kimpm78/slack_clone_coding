import styled from '@emotion/styled';

// WorkSpaceBackGround
export const ThemeBackGround = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
`;

export const ClientContainer = styled.div`
  grid-template:
    'p-ia4_client'
    'p-client__banners' max-content / auto;
  grid-area: p-ia4_client_container;
  width: 100vw;
  height: 100vh;
  display: grid;
`;

export const SearchButton = styled.button`
  justify-content: left;
  max-width: 100%;
  height: 28px;
`;

export const ClientBrowser = styled.div`
  min-width: 668px;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const Offscreen = styled.div`
  clip: rect(0 0 0 0);
  -webkit-user-select: none;
  user-select: none;
  border: 0;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  position: absolute;
  overflow: hidden;
`;

// Toolbar
export const Toolbar = styled.div`
  -webkit-app-region: drag;
  grid-column: 1 / span 2;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  padding-right: 4px;
  display: flex;
  position: relative;
  background: #350d36;
`;

export const TopNavUiSpacer = styled.div`
  width: 70px;
`;

export const NavContainerWrapper = styled.div`
  flex: auto;
  align-items: center;
  display: flex;
`;

export const RightContainer = styled.div`
  flex: 1 0 auto;
  justify-content: flex-end;
  align-items: center;
  margin-right: 4px;
  display: flex;
`;

export const Hidden = styled.div`
  visibility: hidden;
  display: none;
`;

export const TopNavMiddleContainer = styled.div`
  flex: 2 1 0;
  min-width: 280px;
  max-width: 1000px;
`;

export const NavSearchContainer = styled.div`
  background-color: var(--dt_color-theme-surf-inv-pry);
  border-color: #0000;
  border-radius: 6px;
  align-items: center;
  max-width: 100%;
  display: flex;
  background-color: #7d2f7f;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgba(194, 132, 195, 0.8);
  }
`;

export const NavSearchText = styled.span`
  margin-right: 0;
  padding-left: 8px;
`;

export const HistoryButton = styled.button`
  cursor: default;
  opacity: 0.45;
`;

export const RightMenu = styled.div`
  float: right;
`;

export const Header = styled.header`
  height: 38px;
  background: #350d36;
  color: #ffffff;
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);
  /* padding: 5px; */
  text-align: center;
`;

export const ProfileImg = styled.img`
  width: 28px;
  height: 28px;
  position: absolute;
  top: 5px;
  right: 16px;
`;

export const ProfileModal = styled.div`
  display: flex;
  padding: 20px;
  & img {
    display: flex;
  }
  & > div {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
  & #profile-name {
    font-weight: bold;
    display: inline-flex;
  }
  & #profile-active {
    font-size: 13px;
    display: inline-flex;
  }
`;

export const WorkspaceWrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const Workspaces = styled.div`
  width: 65px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background: #3f0e40;
  border-top: 1px solid rgb(82, 38, 83);
  border-right: 1px solid rgb(82, 38, 83);
  vertical-align: top;
  text-align: center;
  padding: 15px 0 0;
`;

export const Channels = styled.nav`
  width: 260px;
  display: inline-flex;
  flex-direction: column;
  background: #3f0e40;
  color: rgb(188, 171, 188);
  vertical-align: top;
  & a {
    padding-left: 36px;
    color: inherit;
    text-decoration: none;
    height: 28px;
    line-height: 28px;
    display: flex;
    align-items: center;
    &.selected {
      color: white;
    }
    &:hover {
      background-color: rgba(194, 132, 195, 0.8);
      -webkit-transition: background-color 0.3s ease;
      transition: background-color 0.3s ease;
      border-radius: 8px;
    }
  }
  & .bold {
    color: white;
    font-weight: bold;
  }
  & .count {
    margin-left: auto;
    background: #cd2553;
    border-radius: 16px;
    display: inline-block;
    font-size: 12px;
    font-weight: 700;
    height: 18px;
    line-height: 18px;
    padding: 0 9px;
    color: white;
    margin-right: 16px;
  }
  & h2 {
    height: 36px;
    line-height: 36px;
    margin: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 15px;
  }
`;

export const WorkspaceName = styled.button`
  height: 64px;
  line-height: 64px;
  border: none;
  width: 100%;
  text-align: left;
  border-top: 1px solid rgb(82, 38, 83);
  border-bottom: 1px solid rgb(82, 38, 83);
  font-weight: 900;
  font-size: 24px;
  background: transparent;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 0;
  padding-left: 16px;
  margin: 0;
  color: white;
  cursor: pointer;
`;

export const MenuScroll = styled.div`
  height: calc(100vh - 102px);
  overflow-y: auto;
`;

export const WorkspaceModal = styled.div`
  padding: 10px 0 0;
  & h2 {
    padding-left: 20px;
  }
  & > button {
    width: 100%;
    height: 28px;
    padding: 4px;
    border: none;
    background: transparent;
    border-top: 1px solid rgb(28, 29, 28);
    cursor: pointer;
    &:last-of-type {
      border-bottom: 1px solid rgb(28, 29, 28);
    }
  }
`;

export const Chats = styled.div`
  flex: 1;
`;

export const AddButton = styled.button`
  color: white;
  font-size: 24px;
  display: inline-block;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const WorkspaceButton = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: white;
  border: 3px solid #3f0e40;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 700;
  color: black;
  cursor: pointer;
`;

export const HeaderSearch = styled.input`
  flex: 0.4;
  background-color: #421f44;
  text-align: center;
  padding: 5px 100px;
  color: gray;
  border: 1px gray solid;
  border-radius: 6px;
  margin-right: 16px;

  &:hover {
    background-color: #ffffff;
    opacity: 0.5;
    cursor: pointer;
    color: black;
  }
`;
