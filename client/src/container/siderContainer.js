import {connect} from "react-redux"
import _Sider from "../component/sider/_Sider";
import {bindActionCreators} from 'redux';
import  {getHomeNavList} from "../action/siderAction";


const mapStateToProps = (state, ownProps) => {
    return {navList: state.home.navList};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {getHomeNavList:bindActionCreators(getHomeNavList,dispatch)}
}


export default connect(mapStateToProps, mapDispatchToProps)(_Sider);