import {Switch, Route, HashRouter as Router} from 'react-router-dom';
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
                    <Route path="/" exact component={Home}/>
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