import  React from "react";
import {Skeleton, List, Icon} from 'antd';
import {Link} from 'react-router-dom';
import "./ArticleList.less";

class ArticleList extends React.Component {


    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.getHomeArticleList({pageIndex: 1, pageSize: 3});
    }


    componentDidUpdate() {
        if (!this.props.userInfo || this.props.userInfo == {}) {
            this.props.history.push("/login");
        }
    }


    render() {
        const articleList = this.props.articleList;
        const IconText = ({type, text}) => (
            <span><Icon type={type} style={{marginRight: 8}}/>{text}</span>
        );
        if (articleList.length === 0) {
            return <div className="home-article-list"></div>
        }
        console.log(articleList)
        return <div>
            <List className="home-article-list"
                  itemLayout="vertical"
                  size="large"
                  pagination={{
                      onChange: (page) => {
                          // console.log("page:"+page);
                      },
                      pageSize: 3,
                  }}
                  dataSource={articleList}
                  renderItem={(item, key) => (
                      <List.Item
                          key={item.title}
                          actions={[<IconText type="clock-circle" text={item.publishDate}/>,
                              <IconText type="eye" text={item.viewNum}/>
                          ]}
                          extra={<img width={272} alt="logo"
                                      src={item.img}/>}
                      >
                          <Link to={{
                              pathname: "detail",
                              search: `?id=${item._id}`,
                          }}>
                              <List.Item.Meta
                                  title={item.title}
                                  description={item.content.slice(0, 100)}
                              />
                          </Link>

                      </List.Item>
                  )}
            />
            <div className="empty"></div>
        </div>
    }

}

ArticleList.propTypes = {}

ArticleList.defaultProps = {
    articleList: []
};

export default  ArticleList;