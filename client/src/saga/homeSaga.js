import {get, post} from "../utils/fetch";
import {call, put, fork, takeEvery, takeLatest} from 'redux-saga/effects';
import {homeSiderActionsTypes} from "../constant/actionTypes";
import config from "../constant/config";

function* fetchNavList() {
    try {
        const response = yield get("/navList");
        if (response.code === config.CODE_SUCCESS) {
            yield put({type:homeSiderActionsTypes.HOME_GET_NAV_SUCCESS,data:response.data})
        }
    } catch (e) {
        console.error(e)
    } finally {
        console.log("fetch finally")
    }

}

export const homeNavFlow = function*() {
    yield takeEvery(homeSiderActionsTypes.HOME_GET_NAV, fetchNavList);
}