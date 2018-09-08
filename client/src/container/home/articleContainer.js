import {connect} from "react-redux"
import ArticleList from "../../component/home/articleList/ArticleList";
import {bindActionCreators} from 'redux';
import  {startFetching, endFetching} from "../../action/globalAction";
import  {getHomeArticleList} from "../../action/articleAction";


const mapStateToProps = (state, ownProps) => {
    return {
        articleList: state.home.articleList,
        isFetching: state.global.isFetching,
        ...ownProps};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        startFetching: bindActionCreators(startFetching, dispatch),
        endFetching:bindActionCreators(endFetching, dispatch),
        getHomeArticleList: bindActionCreators(getHomeArticleList, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);