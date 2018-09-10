import  React from "react";
import "./Detail.less";
import {Card, Avatar, Icon} from 'antd';
const {Meta} = Card;


class Detail extends React.Component {


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getArticleDetail({navId: 1, subNavId: 1});
    }


    render() {
        const {content, createTime, description, href, id, img, likeNum, title, viewNum} = this.props.articleDetail;
        return <Card className="home-article-detail"
            actions={[<span><Icon type="dashboard"/>{createTime}</span>, <span><Icon type="eye"/>{viewNum}</span>,
                <span><Icon type="star"/>{likeNum}</span>]}>
            <Meta
                avatar={<Avatar src={img}/>}
                title={title}
                description={description}
            />
            <div>
                {content}
            </div>
        </Card>
    }

}

Detail.propTypes = {}

Detail.defaultProps = {};

export default  Detail;