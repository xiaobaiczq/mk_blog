import {connect} from "react-redux"
import Detail from "../../component/home/detail/Detail";
import {bindActionCreators} from 'redux';
import  {startFetching, endFetching} from "../../action/globalAction";
import  {getArticleDetail,getHomeArticleList} from "../../action/articleAction";


const mapStateToProps = (state, ownProps) => {
    return {
        userInfo:state.home.userInfo,
        articleList:state.home.articleList,
        articleDetail: state.home.detail,
        isFetching: state.global.isFetching,
        ...ownProps};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getHomeArticleList: bindActionCreators(getHomeArticleList, dispatch),
        getArticleDetail:bindActionCreators(getArticleDetail,dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Detail);