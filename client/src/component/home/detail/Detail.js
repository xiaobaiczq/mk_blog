import  React from "react";
import "./Detail.less";
import {Card, Avatar, Icon} from 'antd';
const {Meta} = Card;
import {Row, Col} from 'antd';

class Detail extends React.Component {


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let id = new URLSearchParams(this.props.location.search).get("id");
        this.props.getArticleDetail({id: id});
    }

    toHomePage = () => {
        this.props.history.push("/");
    }


    render() {
        const {content, publishDate, description, img, title, viewNum} = this.props.articleDetail;
        return <div>
            <Card className="home-article-detail"
                // cover={<img alt="example" src={img} />}
                  actions={[<span><Icon type="clock-circle"/>{publishDate}</span>,
                      <span><Icon type="eye"/>{viewNum}</span>,
                      <span onClick={this.toHomePage}><Icon type="arrow-left"/>返回</span>]}>
                <Meta
                    avatar={<Avatar src={"https://game-1256184526.cos.ap-chengdu.myqcloud.com/mark/flash.png"}/>}
                    title={title}
                    description={content}
                />
            </Card>
        </div>
    }

}

Detail.propTypes = {}

Detail.defaultProps = {};

export default  Detail;