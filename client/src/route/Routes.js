import {Switch, Route, HashRouter as Router, Redirect} from 'react-router-dom';
import React from "react";
import {Spin} from "antd";
import ArticleForm from "../container/home/articleFormContainer";
import {connect} from "react-redux";
import "./Route.less"
import  Game from "../component/game/Game";
import  Login from "../container/login/LoginContainer";
import  Detail from "../container/home/detailContainer";

class Routes extends React.Component {


    componentDidMount() {
        // setTimeout(this.audioAutoPlay,6000)
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
        const uri="https://game-1256184526.cos.ap-chengdu.myqcloud.com/mark";
        const player1=uri+"/1.mp3";
        const player2=uri+"/2.mp3";
        const player3=uri+"/3.mp3";
        const playList=[player1,player2,player3];
        const random=Math.floor(Math.random() * 3);
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
            <audio controls="controls"  id="audio" loop="loop" style={{display: "none"}}>
                <source src={player1} type="audio/mpeg"/>
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