import  React from "react";
import {Carousel} from 'antd';
import "./Game.less";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";
import img7 from "./img/7.jpg";
import img8 from "./img/8.jpg";
import img9 from "./img/9.jpg";
import img10 from "./img/10.jpg";
import img11 from "./img/11.jpg";
import img12 from "./img/12.jpg";
import img13 from "./img/13.jpg";
import img14 from "./img/14.jpg";
import img15 from "./img/15.jpg";
import img16 from "./img/16.jpg";
import img17 from "./img/17.jpg";
import img18 from "./img/18.jpg";
import img19 from "./img/19.jpg";
import img20 from "./img/20.jpg";

import audio1 from "./audio/1.mp3"


import {Card, Icon} from 'antd';
import {Row, Col} from 'antd';
const {Meta} = Card;


class Game extends React.Component {


    constructor(props) {
        super(props);
    }

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
        return <div><Carousel effect="fade" autoplay>
            <div><h1 style={{color: "#ad4747"}}>傻丫头:这是我们在一起的时光</h1></div>
            <div><img src={img1}/></div>
            <div><img src={img2}/></div>
            <div><img src={img3}/></div>
            <div><img src={img4}/></div>
            <div><img src={img5}/></div>
            <div><img src={img6}/></div>
            <div><img src={img7}/></div>
            <div><img src={img8}/></div>
            <div><img src={img9}/></div>
            <div><img src={img10}/></div>
            <div><img src={img11}/></div>
            <div><img src={img12}/></div>
            <div><img src={img13}/></div>
            <div><img src={img14}/></div>
            <div><img src={img15}/></div>
            <div><img src={img16}/></div>
            <div><img src={img17}/></div>
            <div><img src={img18}/></div>
            <div><img src={img19}/></div>
            <div><img src={img20}/></div>
            <div><h1 style={{color: "#ad4747"}}>这首歌叫baby song,送给你也送给我自己,愿你一切安好</h1></div>
        </Carousel>
            <div style={{background: '#ECECEC', padding: '30px'}}>
                <Row type="flex" justify="space-around">
                    <Col > <Card
                        style={{width: 300}}
                        cover={<img alt="example"
                                    src={img14}/>}

                    >
                        <Meta
                            title="这是我们结婚的日子"
                            description="哈哈，挺幸福的哦"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<img alt="example"
                                    src={img6}/>}
                    >
                        <Meta
                            title="带你装逼带你飞"
                            description="你喜欢看海，你觉得那里很美"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<img alt="example"
                                    src={img17}/>}
                    >
                        <Meta
                            title="一起跳舞的时候"
                            description="每次你都偷懒哈"
                        />
                    </Card></Col>
                </Row>
                <Row type="flex" justify="space-around" style={{margin: "30px 0"}}>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<img alt="example"
                                    src={img2}/>}

                    >
                        <Meta
                            title="一次近距离的靠近"
                            description="对你说我全看到了，你叫我不许看"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<img alt="example"
                                    src={img3}/>}
                    >
                        <Meta
                            title="第一次被你说笨"
                            description="其实才是最笨的那一个"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<img alt="example"
                                    src={img13}/>}
                    >
                        <Meta
                            title="你喜欢抱着我"
                            description="很喜欢这种感觉"
                        />
                    </Card></Col>

                </Row>

                <audio controls="controls" id="audio" style={{display:"none"}}>
                    <source src={audio1} type="audio/mpeg"/>
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>

    }
}

export default Game;