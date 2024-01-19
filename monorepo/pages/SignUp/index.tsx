import useInput from '@hooks/useInput';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';

import { Success, Form, Error, Label, Input, LinkContainer, Button, Header, H1 } from './styles';
import React, { useCallback, useState } from 'react';
import { Footer, FooterContainer, FooterLink, LogInHeader, Logo, PageContainer, SubHeading } from '@pages/LogIn/styles';

const SignUp = () => {
  const { data, error, mutate } = useSWR('/api/users', fetcher);

  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, , setPassword] = useInput('');
  const [passwordCheck, , setPasswordCheck] = useInput('');
  const [missmatchError, setMissmatchError] = useState(false);
  const [signUpError, setSignUpError] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
      setMissmatchError(e.target.value !== passwordCheck);
    },
    [passwordCheck, passwordCheck, setMissmatchError],
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setMissmatchError(e.target.value !== password);
    },
    [password, passwordCheck, setMissmatchError],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!missmatchError && nickname) {
        console.log('サーバで会員登録する');
        setSignUpError('');
        setSignUpSuccess(false);
        axios
          .post('/api/users', {
            email,
            nickname,
            password,
          })
          .then((response) => {
            console.log(response);
            setSignUpSuccess(true);
          })
          .catch((error) => {
            console.log(error.response);
            setSignUpError(error.response.data);
          })
          .finally(() => {});
      }
    },
    [email, nickname, password, passwordCheck, missmatchError],
  );

  if (data === undefined) {
    return <div>ローディング中…</div>;
  }

  if (data) {
    return <Navigate to="/workspace/sleact/channel/General" replace />;
  }

  return (
    <PageContainer id="container">
      <Header>
        <Link to="/">
          <Logo src="/assets/icons/SlackLogo.svg" alt="Slack Logo" />
        </Link>
      </Header>
      <Form onSubmit={onSubmit}>
        <LogInHeader>最初にメールアドレスを入力してください</LogInHeader>
        <SubHeading>
          <strong>仕事用のメールアドレス</strong>がおすすめです。
        </SubHeading>
        <Label id="email-label">
          <span>メールアドレス</span>
          <div id="p-get_started_singup" style={{ width: '400px' }}>
            <Input
              placeholder="名前@work-email.com"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChangeEmail}
            />
          </div>
        </Label>
        <Label id="nickname-label">
          <span>ニックネーム</span>
          <div id="p-get_started_singup" style={{ width: '400px' }}>
            <Input
              type="text"
              id="nickname"
              name="nickname"
              value={nickname}
              placeholder="ニックネームを入力してください。"
              onChange={onChangeNickname}
            />
          </div>
        </Label>
        <Label id="password-label">
          <span>パスワード</span>
          <div id="p-get_started_singup" style={{ width: '400px' }}>
            <Input
              type="password"
              id="password"
              name="password"
              autoComplete="attributes"
              value={password}
              onChange={onChangePassword}
            />
          </div>
        </Label>
        <Label id="password-check-label">
          <span>パスワード確認</span>
          <div id="p-get_started_singup" style={{ width: '400px' }}>
            <Input
              type="password"
              id="password-check"
              name="password-check"
              autoComplete="attributes"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
          </div>
          {missmatchError && (
            <Error>
              {' '}
              <i
                className="c-icon c-inline_alert__icon c-icon--info-circle c-icon--inherit c-icon--inline"
                aria-hidden="true"
              />
              パスワードが一致してないです。
            </Error>
          )}
          {!nickname && (
            <Error>
              {' '}
              <i
                className="c-icon c-inline_alert__icon c-icon--info-circle c-icon--inherit c-icon--inline"
                aria-hidden="true"
              />
              ニックネームを入力してください。
            </Error>
          )}
          {signUpError && (
            <Error>
              {' '}
              <i
                className="c-icon c-inline_alert__icon c-icon--info-circle c-icon--inherit c-icon--inline"
                aria-hidden="true"
              />
              {signUpError}
            </Error>
          )}
          {signUpSuccess && <Success>登録完了しました！ ログインしてください。</Success>}
        </Label>
        <div id="p-get_started_singup" style={{ width: '400px' }}>
          <Button type="submit">アカウントを作成する</Button>
        </div>
        <LinkContainer>
          すでに Slack をお使いですか?&nbsp;
          <Link to="/login">ログインする</Link>
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

export default SignUp;
