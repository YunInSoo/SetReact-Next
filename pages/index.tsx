import { InitState, RootState, changeNameAction } from '../reducers/redux';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Image from 'next/image';
import type { NextPage } from 'next';
import UserContext from '../constants/UserContext';
import { changeNameActionContext } from '../reducers/contextAPI';
import styles from '../styles/Home.module.css';
import useInput from '../hooks/useInput';

const Home: NextPage = () => {
  const context: any = useContext(UserContext);

  //Redux========================================================
  const dispatch = useDispatch();
  const nameInput = useInput('');
  const state = useSelector((state: RootState) => state.test);
  const formSubmit = useCallback(
    (e) => {
      dispatch(changeNameAction(nameInput.value));
      e.preventDefault();
    },
    [nameInput.value]
  );

  const nameUserData = useMemo(() => {
    let name = state.name;
    name = name.split(' ')[0];
    return name;
  }, [state.name]);

  //ContextAPI===================================================
  const { user, dispatchUser } = context;
  const nameInputTwo = useInput('');
  const formSubmitTwo = useCallback(
    (e) => {
      dispatchUser({ type: 'CHANGE_NICKNAME', data: nameInputTwo.value });
      console.log(user.name);
      e.preventDefault();
    },
    [nameInputTwo.value]
  );

  const nameUserDataTwo = useMemo(() => {
    let name = user.name;
    name = name.split(' ')[0];
    return name;
  }, [user]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        {/* Redux */}
        <div>Redux</div>
        <form onSubmit={formSubmit}>
          <input type="text" placeholder="입력하세요" {...nameInput} />
          <button type="submit">{nameUserData}</button>
        </form>
        <div>Context API</div>
        {/* ContextAPI */}
        <form onSubmit={formSubmitTwo}>
          <input type="text" placeholder="입력하세요" {...nameInputTwo} />
          <button type="submit">{nameUserDataTwo}</button>
        </form>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
