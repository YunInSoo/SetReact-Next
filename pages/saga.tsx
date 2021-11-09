import React, { useEffect } from 'react';

import { NextPage } from 'next';
import { REQEUST_SAGA_TEST } from '../reducers/redux';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const DivWrapperTwo = styled.h1`
  color: red;
  display: felx;
  justify-content: center;
`;
const Saga: NextPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: REQEUST_SAGA_TEST,
    });
  }, []);

  return (
    <div>
      <DivWrapperTwo>Request saga</DivWrapperTwo>
    </div>
  );
};

export default Saga;
