import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function * sayHello(){
    console.log("hello redux saga");
}


export default function* main(){
    yield call(sayHello);
}