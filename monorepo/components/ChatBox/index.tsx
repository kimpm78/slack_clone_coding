import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Mention, SuggestionDataItem } from 'react-mentions';

import {
  ChatArea,
  EachMention,
  Form,
  Formatting,
  HorizontalLine,
  MentionsTextarea,
  SendButton,
  Toolbox,
} from '@components/ChatBox/styles';
import { IUser } from '@typings/db';
import gravatar from 'gravatar';
import autosize from 'autosize';
import TopToolBar from '@components/TopToolBar';
import BottomToolBar from '@components/BottomToolBar';

interface Props {
  onSubmitForm: (e: any) => void;
  chat?: string;
  onChangeChat: (e: any) => void;
  placeholder: string;
  data?: IUser[];
}

const ChatBox: FC<Props> = ({ chat, onSubmitForm, onChangeChat, placeholder, data }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      autosize(textareaRef.current);
    }
  }, []);

  const onKeyDownChat = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        if (e.nativeEvent.isComposing === false && !e.shiftKey) {
          e.preventDefault();
          onSubmitForm(e);
        }
      }
    },
    [onSubmitForm],
  );

  const renderUserSuggestion: (
    suggestion: SuggestionDataItem,
    search: string,
    highlightedDisplay: React.ReactNode,
    index: number,
    focus: boolean,
  ) => React.ReactNode = useCallback(
    (member, search, highlightedDisplay, index, focus) => {
      if (!data) {
        return null;
      }
      return (
        <EachMention focus={focus}>
          <img src={gravatar.url(data[index].email, { s: '20px', d: 'retro' })} alt={data[index].nickname} />
          <span>{highlightedDisplay}</span>
        </EachMention>
      );
    },
    [data],
  );

  return (
    <HorizontalLine>
      <ChatArea>
        <Form onSubmit={onSubmitForm}>
          <Formatting role="toolbar">
            <TopToolBar />
            <MentionsTextarea
              id="editor-chat"
              value={chat}
              onChange={onChangeChat}
              onKeyDown={onKeyDownChat}
              placeholder={placeholder}
              inputRef={textareaRef}
              allowSuggestionsAboveCursor
            >
              <Mention
                appendSpaceOnAdd
                trigger="@"
                data={data?.map((v) => ({ id: v.id, display: v.nickname })) || []}
                renderSuggestion={renderUserSuggestion}
              />
            </MentionsTextarea>
            <Toolbox>
              <BottomToolBar />
              <SendButton
                className={
                  'c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_medium c-texty_input__button c-texty_input__button--send' +
                  (chat?.trim() ? '' : ' c-texty_input__button--disabled')
                }
                data-qa="texty_send_button"
                aria-label="Send message"
                data-sk="tooltip_parent"
                type="submit"
                disabled={!chat?.trim()}
              >
                <i className="c-icon c-icon--paperplane-filled" aria-hidden="true" />
              </SendButton>
            </Toolbox>
          </Formatting>
        </Form>
      </ChatArea>
    </HorizontalLine>
  );
};

export default ChatBox;
