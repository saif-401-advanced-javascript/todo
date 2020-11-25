import React from 'react';

import NavBar from './components/navbar/nav.js';
import ToDo from './components/todo/todo-connected';
import SettingProvider from './context/setting.js';

export default function App() {
  return (
    <>
      <NavBar />
      <SettingProvider>
        <ToDo />
      </SettingProvider>
    </>
  );
}
