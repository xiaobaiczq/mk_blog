import {globalActionsTypes} from "../constant/actionTypes"

function homeReducer(state = {isFetching: false}, action) {
    switch (action.type) {
        case globalActionsTypes.FETCH_START:
            return {...state,isFetching: true};
        case globalActionsTypes.FETCH_END:
            return {isFetching: false};
        default:
            return state;
    }
}

export default homeReducer;