import { combineReducers } from 'redux';
import httpAxios from '../../services/api';
import produce from 'immer';

export const REQEUST_SAGA_TEST = 'REQEUST_SAGA_TEST';
export const SUCCESS_CHANGE_NICKNAME = 'CHANGE_NICKNAME';

export type InitState = {
  name: string;
  age: number;
  password: string;
  requestSagaTest: boolean;
};

export const changeNameAction = (data: string) => {
  return {
    type: 'CHANGE_NICKNAME',
    data,
  };
};

const initialState: InitState = {
  name: 'yunis',
  age: 27,
  password: 'babo',
  requestSagaTest: false,
};

//immer 라이브러리 없이 사용하기
const test = (state: InitState = initialState, action: any) => {
  switch (action.type) {
    case REQEUST_SAGA_TEST:
      return {
        ...state,
        requestSagaTest: true,
      };
    case SUCCESS_CHANGE_NICKNAME:
      return {
        ...state,
        name: action.data,
      };
    default:
      return state;
  }
};

export type UserInitState = {
  id: string;
  age: number;
  password: string;
  jwtToken: string | undefined;
  isLogined: boolean;
  post: Array<any>;
};

export const changeUserNameAction = (data: string) => {
  return {
    type: 'USER_NAME',
    data,
  };
};

export const loginSuccessAction = (data: UserInitState) => {
  return {
    type: 'SUCCESS_LOG_IN',
    data,
  };
};

const userInitialState: UserInitState = {
  id: 'yunis',
  age: 27,
  password: 'babo',
  jwtToken: '',
  isLogined: false,
  post: [],
};
export const loginFetchAPI = async (data: UserInitState) => {
  try {
    const axios = await httpAxios();
    const result = await axios({
      url: '/api/v2/list_movies.json',
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
  // Action 재활용
  return loginSuccessAction(data);
};

const user = (state: UserInitState = userInitialState, action: any) => {
  switch (action.type) {
    case 'USER_NAME':
      return produce(state, (draftState) => {
        draftState.id = action.id;
      });
    case 'SUCCESS_LOG_IN':
      return produce(state, (draftState) => {
        draftState.id = action.data.id;
        draftState.age = action.data.age;
        draftState.jwtToken = action.data.jwtToken;
        draftState.isLogined = true;
        draftState.post = action.data.post;
      });
    case 'FAIL_LOG_IN':
      return produce(state, (draftState) => {});
    case 'LOG_OUT':
      return produce(state, (draftState) => {
        draftState.id = '';
        draftState.age = 0;
        draftState.jwtToken = undefined;
        draftState.isLogined = false;
        draftState.post = [];
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  test,
  user,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
