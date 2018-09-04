import React from "react";
import Sider from "./../../container/siderContainer";
import Content from "./../content/_Content";
import Header from "./../header/_Header";
import Footer from "./../footer/_Footer";
import {Layout} from 'antd';


export  default  class _Layout extends React.Component {


    render() {
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider />
                <Layout>
                    <Header/>
                    <Content/>
                    <Footer/>
                </Layout>
            </Layout>
        );
    }
}
