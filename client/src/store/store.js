import {createStore, applyMiddleware, compose, combineReducers} from 'redux';

import createSagaMiddleware from 'redux-saga';
import homeReducer from "../reducer/homeReducer";
import globalReducer from "../reducer/globalReducer";
import rootSaga from "../saga/rootSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// mount it on the Store
const store = createStore(
    combineReducers({home: homeReducer, global: globalReducer}),
    composeEnhancers(
        applyMiddleware(sagaMiddleware))
)

// then run the saga
sagaMiddleware.run(rootSaga)

export  default store;
