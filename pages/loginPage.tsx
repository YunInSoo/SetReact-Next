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
      /* 
      dispatch를 하는 이유는 loginFetchAPI 리턴값에 액션타입이 들어가있기때문이고,
      dispatch를 통해서 reducer 데이터값을 변경해야되기 때문입니다.
      */
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
