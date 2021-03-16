import {createStore,applyMiddleware,compose} from "redux"

import createSagaMiddleware from "redux-saga";

import {composeWithDevTools} from "redux-devtools-extension"

import {createWrapper} from "next-redux-wrapper"

import rootReducer from "./reducers";
import rootSaga from "./sagas";


const loggerMiddleware = ({dispatch,getState}) => (next) => (action) =>{
    console.log(action);
    next(action);
};

export const makeStore = ()=>{
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [loggerMiddleware,sagaMiddleware];

    const enhancer = process.env.NODE_ENV === "production" ?
    compose(applyMiddleware(...middlewares))
    :composeWithDevTools(applyMiddleware(...middlewares));

    const store = createStore(rootReducer,enhancer);

    store.sagaTask = sagaMiddleware.run(rootSaga);

    return store;
}

export const wrapper = createWrapper(makeStore,{debug:true});
