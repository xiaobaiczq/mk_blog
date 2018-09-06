import {get, post} from "../utils/fetch";
import {call, put, fork, takeEvery, takeLatest} from 'redux-saga/effects';
import {homeSiderActionsTypes, globalActionsTypes, homeArticleActionsTypes} from "../constant/actionTypes";
import config from "../constant/config";

function* fetchNavList() {
    try {
        const response = yield call(get, "/navList");
        if (response.code === config.CODE_SUCCESS) {
            yield put({type: homeSiderActionsTypes.HOME_GET_NAV_SUCCESS, data: response.data})
        }
    } catch (e) {
        console.error(e)
    }
}

function* fetchArticleList(action) {
    try {
        const {pageIndex,pageSize,navId,subNavId}=action.params;
        yield put({type: globalActionsTypes.FETCH_START})
        const response = yield call(get, `/articleList?navId=${navId}&subNavId=${subNavId}&pageIndex=${pageIndex}&pageSize=${pageSize}`);
        if (response.code == config.CODE_SUCCESS) {
            yield put({type: homeArticleActionsTypes.HOME_GET_ARTICLES_SUCCESS, data: response.data})
        }
    } catch (e) {
        console.error(e)
    } finally {
        yield put({type: globalActionsTypes.FETCH_END})
    }
}

export const homeNavFlow = function*() {
    yield takeEvery(homeSiderActionsTypes.HOME_GET_NAV, fetchNavList);
}

export const homeFetchArticleFlow = function*() {
    yield takeLatest(homeArticleActionsTypes.HOME_GET_ARTICLES, fetchArticleList);
}