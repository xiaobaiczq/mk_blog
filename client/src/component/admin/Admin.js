import React from "react";
import Footer from "./../common/footer/_Footer";
import Sider from "./sider/_Sider";
import {Layout,Breadcrumb,Menu,Icon } from 'antd';
import {Switch, Route, HashRouter as Router,Redirect } from 'react-router-dom';
import ArticleList from "./articleList/ArticleList";
import ArticleCreate from "./articleCreate/ArticleCreate";

export  default  class Admin extends React.Component {


    render() {
        const pathname = this.props.location.pathname;
        const breadcrumbs = pathname.split("/").filter(item => item);
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider history={this.props.history} />
                <Layout>
                    {/*<Header/>*/}
                    <Breadcrumb style={{margin: '16px 16px'}}>
                        {breadcrumbs.map((breadcrumb, index, arr) => {
                            return <Breadcrumb.Item key={index}>{breadcrumb}</Breadcrumb.Item>
                        })}
                    </Breadcrumb>
                    <Router>
                        <Switch>
                            <Redirect  from='/admin' exact={true} to="/admin/article/manage"></Redirect>
                            <Route path="/admin/article/create" exact={true} component={ArticleCreate}></Route>
                            <Route path="/admin/*/manage"  exact={true} component={ArticleList}></Route>
                        </Switch>
                    </Router>
                </Layout>
            </Layout>
        );
    }
}
