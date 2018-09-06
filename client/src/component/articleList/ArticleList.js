import  React from "react";
import { Skeleton, List, Icon } from 'antd';

class ArticleList extends React.Component {


    constructor(props) {
        super(props);
    }


    componentDidMount(){
        this.props.getHomeArticleList({pageIndex:1,pageSize:3});
    }


    render() {
        const articleList = this.props.articleList;
        const IconText = ({type, text}) => (
            <span><Icon type={type} style={{marginRight: 8}}/>{text}</span>
        );
        if(articleList.length===0){
            return <div></div>
        }
        return <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: (page) => {
                    console.log(page);
                },
                pageSize: 3,
            }}
            dataSource={articleList}
            renderItem={item => (
                <List.Item
                    key={item.title}

                    actions={[<IconText type="dashboard" text={item.createTime}/>,
                        <IconText type="eye" text={item.viewNum}/>,
                        <IconText type="star" text={item.likeNum}/>]}
                    extra={<img width={272} alt="logo"
                                src={item.img}/>}
                >
                    <List.Item.Meta
                        title={<a href={item.href}>{item.title}</a>}
                        description={item.description}
                    />
                    {item.content}
                </List.Item>
            )}
        />
    }

}

ArticleList.propTypes = {}

ArticleList.defaultProps = {
    articleList:[]
};

export default  ArticleList;