import  React from "react";
import {Layout, Breadcrumb, Spin} from 'antd';
const {Content} = Layout;
import PropTypes from 'prop-types';
import "./_Content.less";
import ArticleList from "../articleList/ArticleList";


class ArticleContainer extends React.Component {


    constructor(props) {
        super(props);
    }


    render() {
        const pathname = this.props.location.pathname;
        const isFetching=this.props.isFetching;
        const breadcrumbs = pathname.split("/").filter(item => item);
        return <Content style={{margin: '0 16px'}}>
            <Breadcrumb style={{margin: '16px 0'}}>
                {breadcrumbs.map((breadcrumb, index, arr) => {
                    return <Breadcrumb.Item key={index}>{breadcrumb}</Breadcrumb.Item>
                })}
            </Breadcrumb>
            {isFetching&&<div className="article-container">
                <Spin size="large" tip="Loading...">
                </Spin>
            </div>}
            <ArticleList getHomeArticleList={this.props.getHomeArticleList} articleList={this.props.articleList}/>
        </Content>

    }

}

_Content.propTypes = {
    isFetching: PropTypes.bool
}

_Content.defaultProps = {
    isFetching: false,
};

export default  _Content;