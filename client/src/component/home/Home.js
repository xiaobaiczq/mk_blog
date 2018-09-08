import React from "react";
import Sider from "./../../container/common/siderContainer";
import ArticleList from "../../container/home/articleContainer";
import Footer from "./../common/footer/_Footer";
import {Layout, Breadcrumb, Spin} from 'antd';
const {Content} = Layout;


export  default  class Home extends React.Component {


    render() {
        const pathname = this.props.location.pathname;
        const breadcrumbs = pathname.split("/").filter(item => item);
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider history={this.props.history} location={this.props.location}/>
                <Layout>
                    {/*<Header/>*/}
                    <Breadcrumb style={{margin: '16px 16px'}}>
                        {breadcrumbs.map((breadcrumb, index, arr) => {
                            return <Breadcrumb.Item key={index}>{breadcrumb}</Breadcrumb.Item>
                        })}
                    </Breadcrumb>
                    <Content style={{margin: '0 16px'}}>
                        <ArticleList history={this.props.history} location={this.props.location}/>
                    </Content>
                    <Footer/>
                </Layout>
            </Layout>
        );
    }
}
