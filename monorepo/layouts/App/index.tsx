import React from 'react';
import { Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';

// Devtools를 사용하여 React Query의 상태를 확인할 수 있습니다. 이것은 옵션적이며 개발 환경에서 특히 유용
// import { ReactQueryDevtools } from 'react-query/devtools';

const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Workspace = loadable(() => import('@layouts/Workspace'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/workspace/:workspace/*" element={<Workspace />} />
    </Routes>
  );
};

export default App;
