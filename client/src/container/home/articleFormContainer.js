import {connect} from "react-redux"
import ArticleForm from "../../component/home/articleForm/ArticleForm";
import {bindActionCreators} from 'redux';
import  {addArticle} from "../../action/articleAction";


const mapStateToProps = (state, ownProps) => {
    return {
        userInfo:state.home.userInfo,
        articleList: state.home.articleList,
        isFetching: state.global.isFetching,
        ...ownProps};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addArticle: bindActionCreators(addArticle, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ArticleForm);