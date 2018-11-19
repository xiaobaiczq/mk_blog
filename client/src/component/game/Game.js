import  React from "react";
import Zmage from 'react-zmage'
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
import img21 from "./img/21.jpg";
import img22 from "./img/22.jpg";
import img23 from "./img/23.jpg";
import img24 from "./img/24.jpg";
import img25 from "./img/25.jpg";
import img26 from "./img/26.jpg";
import img27 from "./img/27.jpg";
import img28 from "./img/28.jpg";
import img29 from "./img/29.jpg";
import img30 from "./img/30.jpg";
import img31 from "./img/31.jpg";
import img32 from "./img/32.jpg";
import img33 from "./img/33.jpg";
import img34 from "./img/34.jpg";
import img35 from "./img/35.jpg";
import img36 from "./img/36.jpg";
import img37 from "./img/37.jpg";
import img38 from "./img/38.jpg";
import img39 from "./img/39.jpg";
import img40 from "./img/40.jpg";
import img41 from "./img/41.jpg";
import img42 from "./img/42.jpg";
import img43 from "./img/43.jpg";
import img44 from "./img/44.jpg";
import img45 from "./img/45.jpg";
import img46 from "./img/46.jpg";
import img47 from "./img/47.jpg";
import img48 from "./img/48.jpg";
import img49 from "./img/49.jpg";
import img50 from "./img/50.jpg";
import img51 from "./img/51.jpg";
import img52 from "./img/52.jpg";
import img53 from "./img/53.jpg";
import img54 from "./img/54.jpg";
import img55 from "./img/55.jpg";
import img56 from "./img/56.jpg";
import img57 from "./img/57.jpg";
import img58 from "./img/58.jpg";
import img59 from "./img/59.jpg";





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
            <div><h1 style={{color: "#ad4747"}}>小白:生日快乐</h1></div>
            <div><Zmage src={img1}/></div>
            <div><Zmage src={img2}/></div>
            <div><Zmage src={img3}/></div>
            <div><Zmage src={img4}/></div>
            <div><Zmage src={img5}/></div>
            <div><h1 style={{color: "#ad4747"}}>愿你一切安好</h1></div>
        </Carousel>
            <div style={{background: '#ECECEC', padding: '30px'}}>
                <Row type="flex" justify="space-around">
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                    src={img6}/>}

                    >
                        <Meta
                            title="2017年12月3日"
                            description="今天我们去电子科大看了银杏，虽然没有想象的壮观，但还是很开心"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                    src={img7}/>}
                    >
                        <Meta
                            title="2018年4月28日"
                            description="今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                    src={img8}/>}
                    >
                        <Meta
                            title="2018年4月28日"
                            description="你是个吃货，啥都想吃，吃的时候还想着臭美"
                        />
                    </Card></Col>
                </Row>
                <Row type="flex" justify="space-around" style={{margin: "30px 0"}}>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                    src={img9}/>}

                    >
                        <Meta
                            title="2018年6月16日"
                            description="今天和你的家人去了兴隆湖，还等了脚踏车，很累，很开心"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                    src={img10}/>}
                    >
                        <Meta
                            title="2018年6月18日"
                            description="和我姐他们一起爬青城山，一路绿卡，'青城山下白素贞'"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                    src={img11}/>}
                    >
                        <Meta
                            title="2018年7月1日"
                            description="今天和你，你妈一起去逛了春熙路"
                        />
                    </Card></Col>

                </Row>

                <Row type="flex" justify="space-around" style={{margin: "30px 0"}}>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                    src={img12}/>}

                    >
                        <Meta
                            title="2018年7月4日"
                            description="离开成都，第一次坐飞机，起飞和降落的时候还是有点紧张"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                    src={img13}/>}
                    >
                        <Meta
                            title="2018年7月4日"
                            description="第一次去北京，大北京找不到路，点了个外卖烤鸭，味道还不错"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                    src={img14}/>}
                    >
                        <Meta
                            title="2018年7月6日"
                            description="离开了祖国，有点伤感，前方迷茫"
                        />
                    </Card></Col>

                </Row>


                <Row type="flex" justify="space-around" style={{margin: "30px 0"}}>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img15}/>}

                    >
                        <Meta
                            title="2018年7月6日"
                            description="在荷兰的机场停留了很久，把所有的店都给你怕了一遍"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img16}/>}
                    >
                        <Meta
                            title="2018年7月7日"
                            description="平安到达目的地，同事的水煮牛肉招待，爽歪歪"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img17}/>}
                    >
                        <Meta
                            title="2018年7月7日"
                            description="智利的冬天白天没有成都冷，但是晚上特别冷"
                        />
                    </Card></Col>

                </Row>


                <Row type="flex" justify="space-around" style={{margin: "30px 0"}}>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img18}/>}

                    >
                        <Meta
                            title="带着你玩水"
                            description="喜欢看着你呆呆的样子"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img19}/>}
                    >
                        <Meta
                            title="最近的一次合影"
                            description="发现这样挺搭的,哈哈"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img20}/>}
                    >
                        <Meta
                            title="带你去流浪"
                            description="这里是我最喜欢的地方"
                        />
                    </Card></Col>

                </Row>


                <Row type="flex" justify="space-around" style={{margin: "30px 0"}}>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img21}/>}

                    >
                        <Meta
                            title="带着你玩水"
                            description="喜欢看着你呆呆的样子"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img22}/>}
                    >
                        <Meta
                            title="最近的一次合影"
                            description="发现这样挺搭的,哈哈"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img23}/>}
                    >
                        <Meta
                            title="带你去流浪"
                            description="这里是我最喜欢的地方"
                        />
                    </Card></Col>

                </Row>


                <Row type="flex" justify="space-around" style={{margin: "30px 0"}}>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img24}/>}

                    >
                        <Meta
                            title="带着你玩水"
                            description="喜欢看着你呆呆的样子"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img25}/>}
                    >
                        <Meta
                            title="最近的一次合影"
                            description="发现这样挺搭的,哈哈"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img26}/>}
                    >
                        <Meta
                            title="带你去流浪"
                            description="这里是我最喜欢的地方"
                        />
                    </Card></Col>
                </Row>

                <Row type="flex" justify="space-around" style={{margin: "30px 0"}}>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img27}/>}

                    >
                        <Meta
                            title="带着你玩水"
                            description="喜欢看着你呆呆的样子"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img28}/>}
                    >
                        <Meta
                            title="最近的一次合影"
                            description="发现这样挺搭的,哈哈"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img29}/>}
                    >
                        <Meta
                            title="带你去流浪"
                            description="这里是我最喜欢的地方"
                        />
                    </Card></Col>

                </Row>

                <Row type="flex" justify="space-around" style={{margin: "30px 0"}}>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img30}/>}

                    >
                        <Meta
                            title="带着你玩水"
                            description="喜欢看着你呆呆的样子"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img31}/>}
                    >
                        <Meta
                            title="最近的一次合影"
                            description="发现这样挺搭的,哈哈"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img32}/>}
                    >
                        <Meta
                            title="带你去流浪"
                            description="这里是我最喜欢的地方"
                        />
                    </Card></Col>
                </Row>

                <Row type="flex" justify="space-around" style={{margin: "30px 0"}}>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img33}/>}

                    >
                        <Meta
                            title="带着你玩水"
                            description="喜欢看着你呆呆的样子"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img34}/>}
                    >
                        <Meta
                            title="最近的一次合影"
                            description="发现这样挺搭的,哈哈"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img35}/>}
                    >
                        <Meta
                            title="带你去流浪"
                            description="这里是我最喜欢的地方"
                        />
                    </Card></Col>
                </Row>

                <Row type="flex" justify="space-around" style={{margin: "30px 0"}}>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img36}/>}

                    >
                        <Meta
                            title="带着你玩水"
                            description="喜欢看着你呆呆的样子"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img37}/>}
                    >
                        <Meta
                            title="最近的一次合影"
                            description="发现这样挺搭的,哈哈"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img38}/>}
                    >
                        <Meta
                            title="带你去流浪"
                            description="这里是我最喜欢的地方"
                        />
                    </Card></Col>
                </Row>

                <Row type="flex" justify="space-around" style={{margin: "30px 0"}}>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img39}/>}

                    >
                        <Meta
                            title="带着你玩水"
                            description="喜欢看着你呆呆的样子"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img40}/>}
                    >
                        <Meta
                            title="最近的一次合影"
                            description="发现这样挺搭的,哈哈"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img41}/>}
                    >
                        <Meta
                            title="带你去流浪"
                            description="这里是我最喜欢的地方"
                        />
                    </Card></Col>
                </Row>


                <Row type="flex" justify="space-around" style={{margin: "30px 0"}}>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img42}/>}

                    >
                        <Meta
                            title="带着你玩水"
                            description="喜欢看着你呆呆的样子"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img43}/>}
                    >
                        <Meta
                            title="最近的一次合影"
                            description="发现这样挺搭的,哈哈"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img44}/>}
                    >
                        <Meta
                            title="带你去流浪"
                            description="这里是我最喜欢的地方"
                        />
                    </Card></Col>
                </Row>

                <Row type="flex" justify="space-around" style={{margin: "30px 0"}}>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img45}/>}

                    >
                        <Meta
                            title="带着你玩水"
                            description="喜欢看着你呆呆的样子"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img46}/>}
                    >
                        <Meta
                            title="最近的一次合影"
                            description="发现这样挺搭的,哈哈"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img47}/>}
                    >
                        <Meta
                            title="带你去流浪"
                            description="这里是我最喜欢的地方"
                        />
                    </Card></Col>
                </Row>


                <Row type="flex" justify="space-around" style={{margin: "30px 0"}}>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img48}/>}

                    >
                        <Meta
                            title="带着你玩水"
                            description="喜欢看着你呆呆的样子"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img49}/>}
                    >
                        <Meta
                            title="最近的一次合影"
                            description="发现这样挺搭的,哈哈"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img50}/>}
                    >
                        <Meta
                            title="带你去流浪"
                            description="这里是我最喜欢的地方"
                        />
                    </Card></Col>
                </Row>


                <Row type="flex" justify="space-around" style={{margin: "30px 0"}}>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img51}/>}

                    >
                        <Meta
                            title="带着你玩水"
                            description="喜欢看着你呆呆的样子"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img52}/>}
                    >
                        <Meta
                            title="最近的一次合影"
                            description="发现这样挺搭的,哈哈"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img53}/>}
                    >
                        <Meta
                            title="带你去流浪"
                            description="这里是我最喜欢的地方"
                        />
                    </Card></Col>
                </Row>

                <Row type="flex" justify="space-around" style={{margin: "30px 0"}}>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img54}/>}

                    >
                        <Meta
                            title="带着你玩水"
                            description="喜欢看着你呆呆的样子"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img55}/>}
                    >
                        <Meta
                            title="最近的一次合影"
                            description="发现这样挺搭的,哈哈"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img56}/>}
                    >
                        <Meta
                            title="带你去流浪"
                            description="这里是我最喜欢的地方"
                        />
                    </Card></Col>
                </Row>

                <Row type="flex" justify="space-around" style={{margin: "30px 0"}}>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img57}/>}

                    >
                        <Meta
                            title="带着你玩水"
                            description="喜欢看着你呆呆的样子"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img58}/>}
                    >
                        <Meta
                            title="最近的一次合影"
                            description="发现这样挺搭的,哈哈"
                        />
                    </Card></Col>
                    <Col > <Card
                        style={{width: 300}}
                        cover={<Zmage alt="example"
                                      src={img59}/>}
                    >
                        <Meta
                            title="带你去流浪"
                            description="这里是我最喜欢的地方"
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