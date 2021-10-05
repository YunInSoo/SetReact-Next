import produce from 'immer';
import React, { FC, useCallback } from 'react';
import useInput from '../hooks/useInput';

const FormAddSubmit: FC<any> = ({ axiosData, setAxiosData }) => {
  const context = useInput('');
  const email = useInput('');
  let contextTemp: any;
  let emailTemp;
  //불변성을 쉽게 관리할수있는 immer 라이브러리
  const onSubmitAxios = useCallback(
    (e) => {
      contextTemp = context.value;
      emailTemp = email.value;
      setAxiosData(
        produce((draftState: any) => {
          draftState.data.data.data.movies.push({
            title: contextTemp,
          });
        })
      );
      e.preventDefault();
    },
    [axiosData, context, email]
  );

  return (
    <>
      <form onSubmit={onSubmitAxios}>
        <input {...context} type="text" name="context" />
        <input {...email} type="email" name="email" />
        <button type="submit">a</button>
      </form>
    </>
  );
};

export default FormAddSubmit;
