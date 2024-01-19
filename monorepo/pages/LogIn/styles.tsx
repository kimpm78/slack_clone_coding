import styled from '@emotion/styled';

export const PageContainer = styled.div`
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  display: flex;
`;

export const RightMenu = styled.div`
  float: right;
`;

export const Header = styled.header`
  height: 38px;
  background: #350d36;
  color: #ffffff;
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);
  padding: 5px;
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

// TODO fix types (2024.1.17)
// Header Logo
export const Logo = styled.img`
  width: 128px;
  height: 26px;
`;

// LogIn Header H1-H3
export const LogInHeader = styled.h1`
  text-align: center;
  letter-spacing: -0.75px;
  max-width: 700px;
  margin-bottom: 10px;
  font-family:
    Slack-Larsseit,
    Helvetica Neue,
    Helvetica,
    Segoe UI,
    Tahoma,
    Arial,
    sans-serif;
  font-size: 48px;
  font-weight: bold;
  line-height: 46px;
`;

export const SubHeading = styled.div`
  color: #454245;
  text-align: center;
  max-width: 700px;
  margin-bottom: 32px;
  font-size: 18px;
  line-height: 27px;
`;

// Footer
export const FooterContainer = styled.div`
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
  padding: 32px 0;
  display: flex;
  align-items: center;
`;
export const Footer = styled.footer`
  text-align: center;
  border: none;
  place-content: center;
  width: 100%;
  padding: 0;
  display: flex;
`;
export const FooterLink = styled.a`
  font-size: 15px;
  line-height: 1.46668;
  font-weight: initial;
  color: #696969;
  letter-spacing: -0.2px;
  margin-bottom: 4px;
  margin-right: 16px;
  font-weight: 500;

  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow:
      0 0 0 1px var(--sk_focused-shadow-color, var(--saf-0)),
      0 0 0 5px var(--sk_focused-shadow-color-opaque, #1d9bd14d);
    border-radius: 4px;
  }

  &--main {
    text-align: center;
  }
`;
