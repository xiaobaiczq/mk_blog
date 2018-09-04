import {homeSiderActionsTypes} from "../constant/actionTypes"
const initialState = {
    user: {},
    global: {
        isfetching: false
    },
    home: {
        navList: [],
        articleList: [],
    }

}

function basicReducer(state = initialState, action) {
    switch (action.type) {
        case homeSiderActionsTypes.HOME_GET_NAV_SUCCESS:{
            state.home.navList=action.data.navList;
            return Object.assign({},state);
        }
        default:
            return state;
    }
}

export default basicReducer;