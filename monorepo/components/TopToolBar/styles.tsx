import styled from '@emotion/styled';

export const Toolbar = styled.div`
  background: rgba(var(--sk_foreground_min_solid, 248, 248, 248), 1);
  cursor: text;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
  display: flex;
`;

export const TopButton = styled.button`
  opacity: 0.3;
  flex: 0 0 28px;
  margin-bottom: 0;
  border-radius: 4px;
  width: 28px;
  height: 28px;
  margin: 2px;
  padding: 2px;
  transition: opacity 3ms ease;
  &:hover {
    background: #1d1c1d1a;
  }
  &:active {
    opacity: 0.8;
  }
`;

export const Separator = styled.span`
  background: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
  flex-shrink: 0;
  align-self: center;
  width: 1px;
  height: 20px;
  margin: 2px 4px;
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
