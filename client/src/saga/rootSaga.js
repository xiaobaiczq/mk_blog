import {fork,call} from 'redux-saga/effects';
import {homeNavFlow} from "./homeSaga";

function * sayHello() {
    console.log("hello redux saga");
}


export default function* main() {
    yield call(sayHello);
    yield fork(homeNavFlow);
}