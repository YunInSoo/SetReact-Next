import { Middleware, applyMiddleware, compose, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import reducer from '../reducers/redux';
import rootSaga from '../sagas';

const configureStore = (context: object) => {
  console.log(context);
  /* 
    참고 : https://www.evernote.com/shard/s731/sh/7ab44e1d-c82d-7111-3acc-82f2537ee319/aa35cd1f024c0fee76d699e13ccf2e6a
    redux-saga 초기 세팅!! 
    넣을때 applyMiddleware -> middlewares 배열안에 넣으면 된다.
  */
  const sagaMiddleware = createSagaMiddleware();
  const middlewares: Middleware[] = [sagaMiddleware]; // 미들웨어들을 넣으면 된다.
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  //saga 초기세팅 saga file 들고오기
  sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});
export default wrapper;
