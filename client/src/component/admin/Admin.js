import React from "react";
import Footer from "./../common/footer/_Footer";
import Editor from "./../common/editor/Editor"
import {Layout,Breadcrumb,Menu,Icon } from 'antd';
const {Content,Sider}=Layout;


export  default  class Admin extends React.Component {


    render() {
        const pathname = this.props.location.pathname;
        const breadcrumbs = pathname.split("/").filter(item => item);
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline">
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>文章管理</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>用户管理</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="file" />
                            <span>标签管理</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="file" />
                            <span>发表文章</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    {/*<Header/>*/}
                    <Breadcrumb style={{margin: '16px 16px'}}>
                        {breadcrumbs.map((breadcrumb, index, arr) => {
                            return <Breadcrumb.Item key={index}>{breadcrumb}</Breadcrumb.Item>
                        })}
                    </Breadcrumb>
                    <Editor/>
                </Layout>
            </Layout>
        );
    }
}
