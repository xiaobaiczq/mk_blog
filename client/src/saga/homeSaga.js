import {get, post} from "../utils/fetch";
import {call, put, fork, takeEvery, takeLatest} from 'redux-saga/effects';
import {
    homeSiderActionsTypes,
    globalActionsTypes,
    homeArticleActionsTypes,
    userActionTypes,
    articleFormActionTypes
} from "../constant/actionTypes";
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
        const {pageIndex, pageSize, navId, subNavId} = action.params;
        yield put({type: globalActionsTypes.FETCH_START});
        let userInfoRes = yield call(get, `/user/isLogin`);
        yield put({type: userActionTypes.USER_GET, data: userInfoRes.data||{}});
        if(!userInfoRes.data||userInfoRes.data=={}){
            return;
        }
        // const response = yield call(get, `/article/list?pageIndex=${pageIndex}&pageSize=${pageSize}`);
        const response = yield call(get, `/article/list`);
        if (response.code == config.CODE_SUCCESS) {
            yield put({type: homeArticleActionsTypes.HOME_GET_ARTICLES_SUCCESS, data: response.data})
        }
    } catch (e) {
        console.error(e)
    } finally {
        yield put({type: globalActionsTypes.FETCH_END})
    }
}

function* fetchArticleDetail(action) {
    try {
        const {id} = action.params;
        yield put({type: globalActionsTypes.FETCH_START})
        const response = yield call(get, `/article/detail?id=${id}`);
        if (response.code == config.CODE_SUCCESS) {
            yield put({type: homeArticleActionsTypes.HOME_GET_ARTICLES_DETAIL_SUCCESS, data: response.data})
        }
        yield setTimeout(()=>{},2000)
    } catch (e) {
        console.error(e)
    } finally {
        yield put({type: globalActionsTypes.FETCH_END})
    }
}

function* login(action){
    try {
        const {history}=action.params;
        yield put({type: globalActionsTypes.FETCH_START})
        const response = yield call(post,"/user/login",action.params);
        if(response.code == config.CODE_SUCCESS){
            yield put({type: userActionTypes.USER_LOGIN_SUCCESS, data: response.data})
            yield history.push("/")
        }else {
            alert(response.msg);
        }
    }catch (e){
        console.error(e)
    }finally {
        yield put({type: globalActionsTypes.FETCH_END})
    }
}



function* checkLogin(action){
    try {
        yield put({type: globalActionsTypes.FETCH_START})
        let userInfoRes = yield call(get, `/user/isLogin`);
        yield put({type: userActionTypes.USER_GET, data: userInfoRes.data||{}});
    }catch (e){
        console.error(e)
    }finally {
        yield put({type: globalActionsTypes.FETCH_END})
    }
}

function* addArticle(action){
    try {
        yield put({type: globalActionsTypes.FETCH_START})
        const response = yield call(post,"/article/add",action.params);
        if (response.code == config.CODE_SUCCESS) {
            alert("add ok");
            console.log(response.data)
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


export const homeArticleDetailFlow = function*() {
    yield takeLatest(homeArticleActionsTypes.HOME_GET_ARTICLES_DETAIL, fetchArticleDetail);
}

export const addArticleFlow=function*(){
    yield takeLatest(articleFormActionTypes.ARTICLE_FORM_ADD_ARTICLE, addArticle);
}

export const checkLoginFlow=function*(){
    yield takeLatest(userActionTypes.USER_CHECK_LOGIN, checkLogin);
}

export const userLoginFlow=function*(){
    yield takeLatest(userActionTypes.USER_LOGIN, login);
}