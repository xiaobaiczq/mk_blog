import  React from "react";
import Zmage from 'react-zmage'
import {Carousel} from 'antd';
import "./Game.less";
// import img1 from "./img/1.jpg";
// import img2 from "./img/2.jpg";
// import img3 from "./img/3.jpg";
// import img4 from "./img/4.jpg";
// import img5 from "./img/5.jpg";
// import img6 from "./img/6.jpg";
// import img7 from "./img/7.jpg";
// import img8 from "./img/8.jpg";
// import img9 from "./img/9.jpg";
// import img10 from "./img/10.jpg";
// import img11 from "./img/11.jpg";
// import img12 from "./img/12.jpg";
// import img13 from "./img/13.jpg";
// import img14 from "./img/14.jpg";
// import img15 from "./img/15.jpg";
// import img16 from "./img/16.jpg";
// import img17 from "./img/17.jpg";
// import img18 from "./img/18.jpg";
// import img19 from "./img/19.jpg";
// import img20 from "./img/20.jpg";
// import img21 from "./img/21.jpg";
// import img22 from "./img/22.jpg";
// import img23 from "./img/23.jpg";
// import img24 from "./img/24.jpg";
// import img25 from "./img/25.jpg";
// import img26 from "./img/26.jpg";
// import img27 from "./img/27.jpg";
// import img28 from "./img/28.jpg";
// import img29 from "./img/29.jpg";
// import img30 from "./img/30.jpg";
// import img31 from "./img/31.jpg";
// import img32 from "./img/32.jpg";
// import img33 from "./img/33.jpg";
// import img34 from "./img/34.jpg";
// import img35 from "./img/35.jpg";
// import img36 from "./img/36.jpg";
// import img37 from "./img/37.jpg";
// import img38 from "./img/38.jpg";
// import img39 from "./img/39.jpg";
// import img40 from "./img/40.jpg";
// import img41 from "./img/41.jpg";
// import img42 from "./img/42.jpg";
// import img43 from "./img/43.jpg";
// import img44 from "./img/44.jpg";
// import img45 from "./img/45.jpg";
// import img46 from "./img/46.jpg";
// import img47 from "./img/47.jpg";
// import img48 from "./img/48.jpg";
// import img49 from "./img/49.jpg";
// import img50 from "./img/50.jpg";
// import img51 from "./img/51.jpg";
// import img52 from "./img/52.jpg";
// import img53 from "./img/53.jpg";
// import img54 from "./img/54.jpg";
// import img55 from "./img/55.jpg";
// import img56 from "./img/56.jpg";
// import img57 from "./img/57.jpg";
// import img58 from "./img/58.jpg";
// import img59 from "./img/59.jpg";


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
        const contextPath = 'https://game-1256184526.cos.ap-chengdu.myqcloud.com/mark/';
        const arr = [
            [{title: '2017年12月3日', desc: '今天我们去电子科大看了银杏，虽然没有想象的壮观，但还是很开心', url: contextPath + '6.jpg'},
                {title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '7.jpg'},
                {title: '2018年4月28日', desc: '你是个吃货，啥都想吃，吃的时候还想着臭美', url: contextPath + '8.jpg'}],
            [{title: '2018年6月16日', desc: '今天和你的家人去了兴隆湖，还等了脚踏车，很累，很开心', url: contextPath + '9.jpg'},
                {title: '2018年6月18日', desc: '和我姐他们一起爬青城山，一路绿卡，"青城山下白素贞"', url: contextPath + '10.jpg'},
                {title: '2018年7月1日', desc: '今天和你，你妈一起去逛了春熙路，还是开心', url: contextPath + '11.jpg'}],
            [{title: '2018年7月4日', desc: '离开成都，第一次坐飞机，起飞和降落的时候还是有点紧张', url: contextPath + '12.jpg'},
                {title: '2018年7月6日', desc: '离开了祖国，有点伤感，前方迷茫', url: contextPath + '13.jpg'},
                {title: '2018年7月6日', desc: '在荷兰的机场停留了很久，把所有的店都给你怕了一遍', url: contextPath + '14.jpg'}],
            [{title: '2018年7月7日', desc: '平安到达目的地，同事的水煮牛肉招待，爽歪歪', url: contextPath + '15.jpg'},
                {title: '2018年7月7日', desc: '智利的冬天白天没有成都冷，但是晚上特别冷', url: contextPath + '16.jpg'},
                {title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '17.jpg'}],
            [{title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '18.jpg'},
                {title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '19.jpg'},
                {title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '20.jpg'}],
            [{title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '21.jpg'},
                {title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '22.jpg'},
                {title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '23.jpg'}],
            [{title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '24.jpg'},
                {title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '25.jpg'},
                {title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '26.jpg'}],
            [{title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '27.jpg'},
                {title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '28.jpg'},
                {title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '29.jpg'}],
            [{title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '30.jpg'},
                {title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '31.jpg'},
                {title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '32.jpg'}],
            [{title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '33.jpg'},
                {title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '34.jpg'},
                {title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '35.jpg'}],
            [{title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '36.jpg'},
                {title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '37.jpg'},
                {title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '38.jpg'}],
            [{title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '39.jpg'},
                {title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '40.jpg'},
                {title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '41.jpg'}],
            [{title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '42.jpg'},
                {title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '43.jpg'},
                {title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '44.jpg'}],
            [{title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '45.jpg'},
                {title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '46.jpg'},
                {title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '47.jpg'}],
            [{title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '48.jpg'},
                {title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '49.jpg'},
                {title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '50.jpg'}],
            [{title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '51.jpg'},
                {title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '52.jpg'},
                {title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '53.jpg'}],
            [{title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '54.jpg'},
                {title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '55.jpg'},
                {title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '56.jpg'}],
            [{title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '57.jpg'},
                {title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '58.jpg'},
                {title: '2018年4月28日', desc: '今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃', url: contextPath + '59.jpg'}],
        ];
        return <div><Carousel effect="fade" autoplay>
            <div><h1 style={{color: "#ad4747"}}>小白:生日快乐</h1></div>
            <div><Zmage src={contextPath + '1.jpg'}/></div>
            <div><Zmage src={contextPath + '2.jpg'}/></div>
            <div><Zmage src={contextPath + '3.jpg'}/></div>
            <div><Zmage src={contextPath + '4.jpg'}/></div>
            <div><Zmage src={contextPath + '5.jpg'}/></div>
            <div><h1 style={{color: "#ad4747"}}>愿你一切安好</h1></div>
        </Carousel>
            <div style={{background: '#ECECEC', padding: '30px'}}>
                {arr.map((itemArr,index) => {
                    return <Row type="flex" key={'row'+index} justify="space-around" style={{margin: "30px 0"}}>
                        {itemArr.map(item => <Col key={'col'+item.url}><Card
                                style={{width: 300}}
                                cover={<Zmage alt="example"
                                              src={item.url}/>}>
                                <Meta
                                    title={item.title}
                                    description={item.desc}
                                />
                            </Card></Col>
                        )}
                    </Row>
                })
                }
                {/*<Row type="flex" justify="space-around">*/}
                    {/*<Col > <Card*/}
                        {/*style={{width: 300}}*/}
                        {/*cover={<Zmage alt="example"*/}
                                      {/*src={img6}/>}*/}

                    {/*>*/}
                        {/*<Meta*/}
                            {/*title="2017年12月3日"*/}
                            {/*description="今天我们去电子科大看了银杏，虽然没有想象的壮观，但还是很开心"*/}
                        {/*/>*/}
                    {/*</Card></Col>*/}
                    {/*<Col > <Card*/}
                        {/*style={{width: 300}}*/}
                        {/*cover={<Zmage alt="example"*/}
                                      {/*src={img7}/>}*/}
                    {/*>*/}
                        {/*<Meta*/}
                            {/*title="2018年4月28日"*/}
                            {/*description="今天我姐带我们去山上摘樱桃，吃了好多好甜的樱桃"*/}
                        {/*/>*/}
                    {/*</Card></Col>*/}
                    {/*<Col > <Card*/}
                        {/*style={{width: 300}}*/}
                        {/*cover={<Zmage alt="example"*/}
                                      {/*src={img8}/>}*/}
                    {/*>*/}
                        {/*<Meta*/}
                            {/*title="2018年4月28日"*/}
                            {/*description="你是个吃货，啥都想吃，吃的时候还想着臭美"*/}
                        {/*/>*/}
                    {/*</Card></Col>*/}
                {/*</Row>*/}
                {/*<Row type="flex" justify="space-around" style={{margin: "30px 0"}}>*/}
                    {/*<Col > <Card*/}
                        {/*style={{width: 300}}*/}
                        {/*cover={<Zmage alt="example"*/}
                                      {/*src={img9}/>}*/}

                    {/*>*/}
                        {/*<Meta*/}
                            {/*title="2018年6月16日"*/}
                            {/*description="今天和你的家人去了兴隆湖，还等了脚踏车，很累，很开心"*/}
                        {/*/>*/}
                    {/*</Card></Col>*/}
                    {/*<Col > <Card*/}
                        {/*style={{width: 300}}*/}
                        {/*cover={<Zmage alt="example"*/}
                                      {/*src={img10}/>}*/}
                    {/*>*/}
                        {/*<Meta*/}
                            {/*title="2018年6月18日"*/}
                            {/*description="和我姐他们一起爬青城山，一路绿卡，'青城山下白素贞'"*/}
                        {/*/>*/}
                    {/*</Card></Col>*/}
                    {/*<Col > <Card*/}
                        {/*style={{width: 300}}*/}
                        {/*cover={<Zmage alt="example"*/}
                                      {/*src={img11}/>}*/}
                    {/*>*/}
                        {/*<Meta*/}
                            {/*title="2018年7月1日"*/}
                            {/*description="今天和你，你妈一起去逛了春熙路"*/}
                        {/*/>*/}
                    {/*</Card></Col>*/}

                {/*</Row>*/}
                <audio controls="controls" id="audio" style={{display: "none"}}>
                    <source src={audio1} type="audio/mpeg"/>
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>

    }
}

export default Game;