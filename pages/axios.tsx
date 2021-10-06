import React, { useCallback, useEffect, useMemo, useState } from 'react';

import FormAddSubmit from '../components/FormSubmit';
import { NextPage } from 'next';
import httpAxios from '../services/api';
import produce from 'immer';
import useAxios from '../hooks/useAxios';
import useInput from '../hooks/useInput';

export type model = {
  movie_count: number;
  limit: number;
  page_number: number;
  movies: Array<listModels>;
};
export type listModels = {
  title: string;
};
const AxiosPage: NextPage = () => {
  let emailTemp: string;
  let contextTemp: string;

  const context = useInput('');
  const email = useInput('');

  const { state: axiosData, setState: setAxiosData }: any = useAxios(
    {
      url: '/api/v2/list_movies.json',
    },
    httpAxios()
  );

  const list = useMemo(() => {
    const axiosTest: model = axiosData?.data?.data?.data;
    const axiosList = axiosTest?.movies;

    return axiosList;
  }, [axiosData]);

  //기본 spread연산자를 이용해 불변성 지키기
  const onSubmitAxios = useCallback(
    (e) => {
      contextTemp = context.value;
      emailTemp = email.value;
      setAxiosData({
        ...axiosData,
        data: {
          data: {
            data: {
              movies: [
                ...axiosData.data.data.data.movies,
                { title: contextTemp },
              ],
            },
          },
        },
      });
      e.preventDefault();
    },
    [axiosData, context, email]
  );

  //불변성을 쉽게 관리할수있는 immer 라이브러리
  const onSubmitAxios2 = useCallback(
    (e) => {
      console.log('sefsef');
      contextTemp = context.value;
      emailTemp = email.value;
      setAxiosData(
        //produce 작동부분
        produce(axiosData, (draftState: any) => {
          draftState.data.data.data.movies.push({
            title: contextTemp,
          });
        })
      );
      console.log(
        `produce((draftState: any) => {
          draftState.data.data.data.movies.push({
            title: contextTemp,
          });
        })
        이부분에서 axiosData를 제거해도 작동이 된다?? setAxiosData에서 initstate를 그대로 뿌려주는가? 알아보기
        `
      );
      e.preventDefault();
    },
    [axiosData, context, email]
  );

  return (
    <>
      <h1>AXIOS</h1>
      <div>Test form</div>

      <div>spread를 이용한 불변성관리</div>
      <FormAddSubmit axiosData={axiosData} setAxiosData={setAxiosData} />
      <form onSubmit={onSubmitAxios}>
        <input {...context} type="text" name="context" />
        <input {...email} type="email" name="email" />
        <button type="submit">a</button>
      </form>

      <div>immer libary를 이용한 불변성 관리</div>

      <form onSubmit={onSubmitAxios2}>
        <input {...context} type="text" name="context" />
        <input {...email} type="email" name="email" />
        <button type="submit">a</button>
      </form>

      <ul>
        {list?.map((e, index) => {
          return <li key={index}>{e.title}</li>;
        })}
      </ul>
    </>
  );
};

export default AxiosPage;
