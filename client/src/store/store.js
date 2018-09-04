import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import basicReducer from "./../reducer/reducer";
import rootSaga from "../saga/rootSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// mount it on the Store
const store = createStore(
    basicReducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware))
)

// then run the saga
sagaMiddleware.run(rootSaga)

export  default store;
