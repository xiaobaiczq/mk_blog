import {homeSiderActionsTypes,homeArticleActionsTypes} from "../constant/actionTypes";


const initialState = {
    navList: [],
    articleList: [],
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
        default:
            return state;
    }
}

export default homeReducer;