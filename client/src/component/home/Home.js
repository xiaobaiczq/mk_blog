import React from "react";
import Sider from "./../../container/common/siderContainer";
import ArticleList from "../../container/home/articleContainer";
import Footer from "./../common/footer/_Footer";
import Detail from "../../container/home/detailContainer"
import {Layout, Breadcrumb, Spin} from 'antd';
import {Switch, Route, HashRouter as Router} from 'react-router-dom';


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
                    <Router >
                        <Switch>
                            <Route path="*/list" exact={true} component={ArticleList} history={this.props.history}
                                   location={this.props.location}></Route>
                            <Route path="*/detail" exact component={Detail}></Route>
                        </Switch>
                    </Router>
                    <Footer/>
                </Layout>
            </Layout>
        );
    }
}
