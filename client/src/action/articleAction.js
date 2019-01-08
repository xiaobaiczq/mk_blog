import {homeArticleActionsTypes, articleFormActionTypes} from "./../constant/actionTypes";

export const getHomeArticleList = function ({navId, subNavId, pageIndex, pageSize}) {
    var action = {
        type: homeArticleActionsTypes.HOME_GET_ARTICLES,
        params: {
            pageIndex: pageIndex ? pageIndex : 1,
            pageSize: pageSize ? pageSize : 3,
            navId: navId ? navId : 1,
            subNavId: subNavId ? subNavId : 1
        }
    }
    return action
}


export const getArticleDetail = function ({id}) {
    return {
        type: homeArticleActionsTypes.HOME_GET_ARTICLES_DETAIL,
        params: {
            id
        }
    }
}

export const addArticle = ({title, description, content, img, publishDate}) => {
    return {
        type: articleFormActionTypes.ARTICLE_FORM_ADD_ARTICLE,
        params: {title, description, content, img, publishDate}
    }
}
