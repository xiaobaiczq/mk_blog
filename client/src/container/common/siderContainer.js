import _Sider from "../../component/home/sider/_Sider";
import {bindActionCreators} from 'redux';
import  {getHomeNavList} from "../../action/siderAction";
import  {getHomeArticleList} from "../../action/articleAction";
import {connect} from "react-redux"

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        navList: state.home.navList,
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getHomeNavList: bindActionCreators(getHomeNavList, dispatch),
        getHomeArticleList: bindActionCreators(getHomeArticleList, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(_Sider);