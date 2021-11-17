import type { NextPage } from 'next';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import BlockContents from '../components/block';
import UseContext from '../constants/UseContext';
import useInput from '../hooks/useInput';

const Home: NextPage = () => {
  const inputValue = useInput('');

  const addClickEvent = useCallback(
    (e) => {
      const inputTextData = inputValue.value;
      const dataLenght =
        data.post.length !== 0 ? data.post[data.post.length - 1].id : 0;

      listDispatch({
        type: 'ADD_LIST_ITEM',
        data: { id: dataLenght + 1, contents: inputTextData },
      });
    },
    [data, inputValue.value]
  );
  const list = useMemo(() => {
    console.log(data.post);
    return data.post.length != 0 ? (
      data.post.map((e: any) => {
        return <BlockContents key={e.id} data={e} dispatch={listDispatch} />;
      })
    ) : (
      <div>값이 없습니다.</div>
    );
  }, [data]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <button onClick={addClickEvent}>add</button>

        {list}
        <input type="text" {...inputValue}></input>
      </div>
    </>
  );
};

export default Home;
