import {connect} from "react-redux"
import Detail from "../../component/home/detail/Detail";
import {bindActionCreators} from 'redux';
import  {startFetching, endFetching} from "../../action/globalAction";
import  {getArticleDetail} from "../../action/articleAction";


const mapStateToProps = (state, ownProps) => {
    return {
        articleDetail: state.home.detail,
        isFetching: state.global.isFetching,
        ...ownProps};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        startFetching: bindActionCreators(startFetching, dispatch),
        endFetching:bindActionCreators(endFetching, dispatch),
        getArticleDetail: bindActionCreators(getArticleDetail, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Detail);