/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import superagent from 'superagent';

dotenv.config();

const API =
  process.env.REACT_APP_API || 'https://auth-server-401.herokuapp.com';
const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';

export const LoginContext = React.createContext();

export default function LoginProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = cookie.load('auth');
    validateToken(token);
  }, []);

  const login = async (username, password) => {
    try {
      const response = await superagent
        .post(`${API}/signin`)
        .set('authorization', `Basic ${btoa(`${username}:${password}`)}`);
      validateToken(response.body.token);
    } catch (error) {
      console.error(error.message);
    }
  };

  const signup = async (username, password, role, email) => {
    try {
      let res = await superagent
        .post(`${API}/signup`)
        .send({ username, password, role, email });
      validateToken(res.body.token);
    } catch (e) {
      console.error(e.message);
    }
  };

  let setLoginState = (loggedIn, token, user) => {
    cookie.save('auth', token);
    setLoggedIn(loggedIn);
    setUser(user);
  };

  const validateToken = (token) => {
    try {
      console.log('all good', token);
      let user = jwt.verify(token, JWT_SECRET);
      setLoginState(true, token, user);
    } catch (e) {
      setLoginState(false, null, {});
    }
  };

  const logout = () => {
    setLoginState(false, null, {});
  };

  const state = {
    login,
    logout,
    signup,
    user,
    loggedIn
  };
  return (
    <LoginContext.Provider value={state}>
      {props.children}
    </LoginContext.Provider>
  );
}
