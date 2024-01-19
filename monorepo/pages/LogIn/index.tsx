import React, { useCallback, useState } from 'react';
import useInput from '@hooks/useInput';
import { Button, Error, Form, Header, Input, Label, LinkContainer } from '@pages/SignUp/styles';
import fetcher from '@utils/fetcher';
import axios from 'axios';
// route v6から　　書き方が変わる
import { Link, Navigate } from 'react-router-dom';
import useSWR from 'swr';
import { Footer, FooterContainer, FooterLink, LogInHeader, Logo, PageContainer, SubHeading } from './styles';

const LogIn = () => {
  const { data, error, mutate } = useSWR('/api/users', fetcher);
  const [logInError, setLogInError] = useState(false);
  const [email, setEmail] = useInput<string>('');
  const [password, setPassword] = useInput<string>('');

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setLogInError(false);
      axios
        .post(
          '/api/users/login',
          { email, password },
          {
            withCredentials: true,
          },
        )
        .then((response) => {
          if (response.status === 200) {
            mutate(response.data, false); // OPTIMISTIC UI
          } else {
            setLogInError(true);
          }
        })
        .catch(() => {
          setLogInError(true);
        });
    },
    [email, password, mutate],
  );

  if (data === undefined) {
    return <div>ローディング中…</div>;
  }

  if (data) {
    return <Navigate replace to="/workspace/sleact/channel/General" />;
  }

  return (
    <PageContainer id="container">
      <Header>
        <Link to="/">
          <Logo src="/assets/icons/SlackLogo.svg" alt="Slack Logo" />
        </Link>
      </Header>
      <Form onSubmit={handleSubmit}>
        <div className="p-refreshed_page">
          <LogInHeader>Slack にサインインする</LogInHeader>
          <SubHeading>
            <strong>仕事用のメールアドレスが</strong>おすすめです。
          </SubHeading>
        </div>
        <div>
          <Label id="email-label">
            <span>メールアドレス</span>
            <div id="p-get_started_signin" style={{ width: '400px' }}>
              <Input
                placeholder="名前@work-email.com"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={setEmail}
              />
            </div>
          </Label>
          <Label id="password-label">
            <span>パスワード</span>
            <div>
              <Input
                type="password"
                id="password"
                name="password"
                autoComplete="attributes"
                value={password}
                onChange={setPassword}
              />
            </div>
            {logInError && (
              <Error>
                <i
                  className="c-icon c-inline_alert__icon c-icon--info-circle c-icon--inherit c-icon--inline"
                  aria-hidden="true"
                />
                メールアドレスとパスワードが一致しません。
              </Error>
            )}
          </Label>
          <Button type="submit">ログイン</Button>
        </div>
        <LinkContainer>
          Slack を使うのは初めてですか？&nbsp;
          <Link to="/signup">アカウントを作成する</Link>
        </LinkContainer>
      </Form>
      <FooterContainer>
        <Footer>
          <FooterLink
            target="_blank"
            className="c-link c-button-unstyled p-refreshed_page__footer_link p-refreshed_page__footer_link--main"
            href="https://slack.com/intl/ja-jp/legal" // リアルのURL
            rel="noopener noreferrer"
          >
            プライバシーと利用規約
          </FooterLink>
          <FooterLink
            target="_blank"
            className="c-link c-button-unstyled p-refreshed_page__footer_link p-refreshed_page__footer_link--main"
            href="#"
          >
            お問い合わせ
          </FooterLink>
          <FooterLink
            target="_blank"
            className="c-link c-button-unstyled p-refreshed_page__footer_link p-refreshed_page__footer_link--main"
            href="#"
          >
            <i
              className="c-icon margin_right_25 c-icon--globe c-icon--inherit"
              aria-hidden="true"
              style={{ marginRight: '4px' }}
            />
            地域を変更
            <i className="c-icon c-icon--chevron-medium-down c-icon--inherit" aria-hidden="true" />
          </FooterLink>
        </Footer>
      </FooterContainer>
    </PageContainer>
  );
};

export default LogIn;
