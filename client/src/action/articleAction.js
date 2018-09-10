import {homeArticleActionsTypes} from "./../constant/actionTypes";

export const getHomeArticleList = function ({navId,subNavId, pageIndex, pageSize}) {
    var action = {
        type: homeArticleActionsTypes.HOME_GET_ARTICLES,
        params: {
            pageIndex: pageIndex?pageIndex:1,
            pageSize: pageSize?pageSize:3,
            navId: navId ? navId : 1,
            subNavId:subNavId?subNavId:1
        }
    }
    return action
}



export const getArticleDetail=function({navId,subNavId}){
    return {
        type:homeArticleActionsTypes.HOME_GET_ARTICLES_DETAIL,
        params:{
            navId:navId,
            subNavId:subNavId
        }
    }
}
