import {connect} from "react-redux"
import Login from "../../component/login/Login";
import {bindActionCreators} from 'redux';
import  {startFetching, endFetching} from "../../action/globalAction";
import  {getHomeArticleList} from "../../action/articleAction";


const mapStateToProps = (state, ownProps) => {
    return {
        isFetching: state.global.isFetching,
        ...ownProps};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        startFetching: bindActionCreators(startFetching, dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);