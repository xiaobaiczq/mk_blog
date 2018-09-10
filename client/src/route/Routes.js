import {Switch, Route, HashRouter as Router,Redirect} from 'react-router-dom';
import React from "react";
import {Spin} from "antd";
import Home from "../component/home/Home";
import Admin from "../component/admin/Admin";
import {connect} from "react-redux";
import "./Route.less"


class Routes extends React.Component {

    render() {
        const isFetching = this.props.isFetching;
        return <Router>
            <div>
                <Switch>
                    <Redirect from='/' exact to={`/home/随笔/javascript/list?navId=1&subNavId=1`}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/admin" component={Admin}/>
                </Switch>
                {isFetching && <div id="global-loading">
                    <Spin size="large" tip="Loading...">
                    </Spin>
                </div>}
            </div>
        </Router>
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        isFetching: state.global.isFetching,
    };
}


export default connect(mapStateToProps, {})(Routes);