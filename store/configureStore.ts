import { Middleware, applyMiddleware, compose, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import reducer from "../reducers/redux";

const configureStore = (context: object) => {
    console.log('context')
    console.log(context)
    const middlewares: Middleware[] = []; // 미들웨어들을 넣으면 된다.
    const enhancer = process.env.NODE_ENV === 'production' ? 
      compose(applyMiddleware(...middlewares)) : 
          composeWithDevTools(
            applyMiddleware(...middlewares)
          );
    const store = createStore(reducer, enhancer);
    return store;
  
  }

const wrapper = createWrapper(configureStore, {debug:process.env.NODE_ENV === 'development'});
export default wrapper;