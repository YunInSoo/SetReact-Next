import type { NextPage } from 'next';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlockContents from '../components/block';
import useInput from '../hooks/useInput';
import { RootState } from '../reducers/redux';

const Home: NextPage = () => {
  const inputValue = useInput('');
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.list);
  const addClickEvent = useCallback(
    (e) => {
      const inputTextData = inputValue.value;
      const dataLenght = data.post.length !== 0 ? data.post[0].id : 0;

      dispatch({
        type: 'ADD_LIST_ITEM',
        data: { id: dataLenght + 1, content: inputTextData },
      });
    },
    [data, inputValue.value]
  );
  const list = useMemo(() => {
    console.log(data.post);
    return data.post.length != 0 ? (
      data.post.map((e: any) => {
        return <BlockContents key={e.id} data={e} />;
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
