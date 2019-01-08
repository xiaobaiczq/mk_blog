import {userActionTypes} from "../constant/actionTypes";

export function userLogin(params,history){
    return {
        type:userActionTypes.USER_LOGIN,
        params:{...params,history}
    }
}

export function checkLogin(params){
    return {
        type:userActionTypes.USER_CHECK_LOGIN,
    }
}