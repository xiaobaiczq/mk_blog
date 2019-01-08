import {connect} from "react-redux"
import Login from "../../component/login/Login";
import {bindActionCreators} from 'redux';
import  {startFetching, endFetching} from "../../action/globalAction";
import {userLogin,checkLogin} from "../../action/userAction"


const mapStateToProps = (state, ownProps) => {
    return {
        isFetching: state.global.isFetching,
        ...ownProps};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        userLogin: bindActionCreators(userLogin, dispatch),
        checkLogin:bindActionCreators(checkLogin,dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);