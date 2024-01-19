import styled from '@emotion/styled';

// Toolbar
export const NavToolbar = styled.div`
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

// Navigation Icons
export const HistoryButtons = styled.button`
  color: var(--p-channel_sidebar__top-nav-text);
  opacity: 0.8;
  border-radius: 4px;
  margin: 1px;
  padding: 3px;
  :hover {
    background-color: rgba(194, 132, 195, 0.8);
    -webkit-transition: background-color 0.3s ease;
    transition: background-color 0.3s ease;
  }
`;

export const SearchButton = styled.button`
  justify-content: left;
  max-width: 100%;
  height: 28px;
`;

export const ToolbarSpacer = styled.div`
  width: 70px;
`;

export const NavContainerWrapper = styled.div`
  flex: auto;
  align-items: center;
  display: flex;
`;

// LeftContainer, Start, End
export const LeftContainer = styled.div`
  flex-direction: row;
  flex: none;
  display: flex;
  position: relative;
`;
export const LeftContainerStart = styled.div`
  flex-direction: row;
  justify-content: flex-start;
  display: flex;
`;

export const LeftContainerEnd = styled.div`
  flex-direction: row;
  justify-content: flex-start;
  display: flex;
`;

export const RightContainer = styled.div`
  flex: 1 0 auto;
  justify-content: flex-end;
  align-items: center;
  margin-right: 4px;
  display: flex;
`;

export const NavMiddleContainer = styled.div`
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

export const LogOutButton = styled.button`
  border: none;
  width: 100%;
  border-top: 1px solid rgb(29, 28, 29);
  background: transparent;
  display: block;
  height: 33px;
  padding: 5px 20px 5px;
  outline: none;
  cursor: pointer;
`;

export const Chats = styled.div`
  flex: 1;
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
