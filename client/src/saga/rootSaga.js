import {fork,call} from 'redux-saga/effects';
import {homeNavFlow,homeFetchArticleFlow,homeArticleDetailFlow,addArticleFlow,userLoginFlow,checkLoginFlow} from "./homeSaga";

function * sayHello() {
    console.log("hello redux saga");
}


export default function* main() {
    yield call(sayHello);
    yield fork(homeNavFlow);
    yield fork(homeFetchArticleFlow);
    yield fork(homeArticleDetailFlow);
    yield fork(addArticleFlow);
    yield fork(userLoginFlow);
    yield fork(checkLoginFlow);
}