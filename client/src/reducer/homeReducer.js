import {homeSiderActionsTypes,homeArticleActionsTypes,userActionTypes} from "../constant/actionTypes";


const initialState = {
    navList: [],
    userInfo:{},
    articleList: [],
    detail:{
    }
}

function homeReducer(state = initialState, action) {
    switch (action.type) {
        case homeSiderActionsTypes.HOME_GET_NAV_SUCCESS: {
            const navList = action.data.navList;
            return {...state,navList}
        }
        case homeArticleActionsTypes.HOME_GET_ARTICLES_SUCCESS: {
            const articleList = action.data.articleList;
            return {...state,articleList}
        }
        case homeArticleActionsTypes.HOME_GET_ARTICLES_DETAIL_SUCCESS: {
            const detail = action.data.detail;
            return {...state,detail}
        }
        case userActionTypes.USER_LOGIN_SUCCESS :{
            const userInfo=action.data.userInfo;
            return {...state,userInfo};
        }
        case userActionTypes.USER_GET :{
            const userInfo=action.data.userInfo;
            return {...state,userInfo};
        }
        default:
            return state;
    }
}

export default homeReducer;