import React, { useCallback } from 'react';
import {
  RootState,
  loginFetchAPI,
  loginSuccessAction,
} from '../reducers/redux';
import { useDispatch, useSelector } from 'react-redux';

import { NextPage } from 'next';
import useInput from '../hooks/useInput';

const LoginPage: NextPage = () => {
  const id = useInput('');
  const password = useInput('');
  const dispatch = useDispatch();
  const isLogined = useSelector((state: RootState) => state.user.isLogined);

  const loginSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const resultActionData = await loginFetchAPI({
        id: id.value,
        age: 20,
        password: password.value,
        jwtToken: 'token token token token',
        isLogined: true, //실제로 이걸로 작동안됩니다.
        post: [{ title: 'sfesf' }, { title: 'sfesf2' }],
      });
      dispatch(resultActionData);
    },
    [id, password]
  );

  return (
    <>
      <div>
        <h1>LOGIN PAGE</h1>
        {isLogined ? (
          <div>logined</div>
        ) : (
          <form onSubmit={loginSubmit}>
            <input {...id} type="text" name="id" />
            <input {...password} type="password" name="password" />
            <button type="submit">LOGIN</button>
          </form>
        )}
      </div>
    </>
  );
};

export default LoginPage;
