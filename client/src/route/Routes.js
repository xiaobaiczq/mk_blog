import {Switch, Route, HashRouter as Router, Redirect} from 'react-router-dom';
import React from "react";
import {Spin} from "antd";
import audio1 from "../component/game/audio/1.mp3"
import ArticleForm from "../container/home/articleFormContainer";
import {connect} from "react-redux";
import "./Route.less"
import  Game from "../component/game/Game";
import  Login from "../container/login/LoginContainer";
import  Detail from "../container/home/detailContainer";

class Routes extends React.Component {

    componentDidMount() {
        this.audioAutoPlay();
    }

    audioAutoPlay() {
        var audio = document.getElementById('audio');
        audio.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
            audio.play();
        }, false);
    }


    render() {
        const isFetching = this.props.isFetching;
        return <div>
            <Router>
                <div>
                    <Switch>
                        {/*<Redirect from='/' exact to={`/home/随笔/javascript/list?navId=1&subNavId=1`}/>*/}
                        {/*<Route path="/home" component={Home}/>*/}
                        {/*<Route path="/admin" component={Admin}/>*/}
                        <Route path="/" exact component={Game}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/detail" exact component={Detail}/>
                        <Route path="/article/add" exact component={ArticleForm}/>
                    </Switch>
                    {isFetching && <div id="global-loading">
                        <Spin size="large" tip="Loading...">
                        </Spin>
                    </div>}
                </div>
            </Router>
            <audio controls="controls" id="audio" style={{display: "none"}}>
                <source src={audio1} type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>
        </div>
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        isFetching: state.global.isFetching,
    };
}


export default connect(mapStateToProps, {})(Routes);