import styled from '@emotion/styled';
import { MentionsInput } from 'react-mentions';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const ChatArea = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 20px;
`;

export const Form = styled.form`
  color: rgb(29, 28, 29);
  font-size: 15px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgb(29, 28, 29);
`;

export const MentionsTextarea = styled(MentionsInput)`
  font-family: Slack-Lato, appleLogo, sans-serif;
  font-size: 15px;
  padding: 8px 9px;

  & strong {
    background: skyblue;
  }

  & textarea {
    height: 44px;
    padding: 9px 10px !important;
    outline: none !important;
    border-radius: 4px !important;
    resize: none !important;
    line-height: 22px;
    border: none;
  }

  & ul {
    border: 1px solid lightgray;
    max-height: 200px;
    overflow-y: auto;
    padding: 9px 10px;
    background: white;
    border-radius: 4px;
    width: 150px;
  }
`;

export const Toolbox = styled.div`
  position: relative;
  background: rgb(248, 248, 248);
  height: 41px;
  display: flex;
  border-top: 1px solid rgb(221, 221, 221);
  align-items: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const SendButton = styled.button`
  position: absolute;
  top: 2px;
  right: 5px;
  border-radius: 4px 0 0 4px;
  width: auto;
  padding-left: 8px;
  padding-right: 8px;
`;

export const EachMention = styled.button<{ focus: boolean }>`
  padding: 4px 20px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  color: rgb(28, 29, 28);
  width: 100%;

  & img {
    margin-right: 5px;
  }

  ${({ focus }) =>
    focus &&
    `
    background: #1264a3;
    color: white;
  `};
`;

// Chat Toolbar

export const Formatting = styled.div`
  display: grid;
`;

export const ResizeTriggers = styled.div`
  content: ' ';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: -1;
  animation: 1ms resizeanim;
  visibility: hidden;
  opacity: 0;
`;

export const HorizontalLine = styled.div`
  border-top: 1px solid rgba(var(--sk_foreground_low_solid, 221, 221, 221), 1);
  border-bottom: 0;
  margin: 0 0 -1px;
  position: relative;
  top: -1px;
  left: 0;
  right: 0;
`;

export const StyledAddCircleIcon = styled(AddCircleIcon)`
  background: rgba(var(--sk_foreground_soft, 29, 28, 29), 0.06);
  transform-origin: center;
  width: 24px;
  height: 24px;
  transition:
    background 80ms,
    transform 0.32s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  transform: rotate(-270deg);
  border-radius: 50% !important;
  &:active {
    background: rgba(var(--sk_foreground_soft, 29, 28, 29), 0.06);
  }
`;
