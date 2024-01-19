import styled from '@emotion/styled';

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

export const BottomButton = styled.button`
  opacity: 0.3;
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

export const SendButton = styled.button`
  position: absolute;
  top: 2px;
  right: 5px;
  border-radius: 4px 0 0 4px;
  width: auto;
  padding-left: 8px;
  padding-right: 8px;
`;
