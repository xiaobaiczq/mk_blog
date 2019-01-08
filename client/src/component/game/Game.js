import  React from "react";
import ArticleList from "../../container/home/articleContainer";
// import Zmage from 'react-zmage';
import {Carousel} from 'antd';
import "./Game.less";



// import audio1 from "./audio/1.mp3"


import {Card, Icon} from 'antd';
import {Row, Col} from 'antd';
const {Meta} = Card;


class Game extends React.Component {


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.audioAutoPlay();
    }

    audioAutoPlay() {
        var audio = document.getElementById('audio');
        audio.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
            audio.play();
        }, false);
    }


    musicPlay(isPlay) {
        var media = document.querySelector('#bg-music');
        if (isPlay && media.paused) {
            media.play();
        }
        if (!isPlay && !media.paused) {
            media.pause();
        }
    }


    render() {
        const contextPath = 'https://game-1256184526.cos.ap-chengdu.myqcloud.com/mark/';
        return <div><Carousel effect="fade" autoplay>
            <div><h1 style={{color: "#ad4747"}}><strong>游戏不倒我们不散!</strong></h1></div>
            <div><img src={contextPath + '47.jpg'}/></div>
            <div><h1 style={{color: "#ad4747"}}>不知道送你什么好，我把从去年到今年的回忆送你</h1></div>
        </Carousel>
            <ArticleList history={this.props.history} />
            {/*<audio controls="controls" id="audio" style={{display: "none"}}>*/}
                {/*<source src={audio1} type="audio/mpeg"/>*/}
                {/*Your browser does not support the audio element.*/}
            {/*</audio>*/}
        </div>

    }
}

export default Game;