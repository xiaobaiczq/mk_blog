import React from "react";
import Sider from "./../../container/siderContainer";
import Content from "./../../container/contentContainer";
import Header from "./../header/_Header";
import Footer from "./../footer/_Footer";
import {Layout} from 'antd';


export  default  class Home extends React.Component {


    render() {
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider history={this.props.history} location={this.props.location}/>
                <Layout>
                    {/*<Header/>*/}
                    <Content history={this.props.history} location={this.props.location}/>
                    <Footer/>
                </Layout>
            </Layout>
        );
    }
}
