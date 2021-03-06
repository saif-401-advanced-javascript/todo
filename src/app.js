import React from 'react';
import Auth from './components/auth/auth.js';
import Signup from './components/auth/singup.js';
import NavBar from './components/navbar/nav.js';
import ToDo from './components/todo/todo-connected';
import LoginProvider from './context/context.js';
import SettingProvider from './context/setting.js';

export default function App() {
  return (
    <>
      <LoginProvider>
        <NavBar />
        <Signup />
        <Auth capability='read'>
          <SettingProvider>
            <ToDo />
          </SettingProvider>
        </Auth>
      </LoginProvider>
    </>
  );
}
