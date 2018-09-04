import  React from "react";
import {Layout, Menu, Icon, Breadcrumb, Row, Col} from 'antd';
const {Content} = Layout;
const {SubMenu} = Menu;

class _Content extends React.Component {


    constructor(props) {
        super(props);
    }


    render() {
        return <Content style={{margin: '0 16px'}} id="content">
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                <Row >
                    <Col span={8}><img src=""/></Col>
                    <Col span={16}>
                        <div>
                            <p className="title">夯实JS系列--变量、作用域和内存问题</p>
                            <p className="title">这里应该有摘要的，因为设计的数据库表表结构的时候忘记了，后面也是懒得加了，感觉太麻烦了，就算了</p>
                        </div>
                        <div>
                            <Icon type="clock-circle" theme="outlined"/>
                            <span> 2018-09-03 </span>
                            <Icon type="eye" theme="outlined"/>
                            <span> 10</span>
                            <Icon type="message" theme="outlined"/>
                            <span>1</span>
                            <span >阅读全文</span>
                        </div>
                    </Col>
                </Row>
                <Row >
                    <Col span={8}><img src=""/></Col>
                    <Col span={16}>
                        <div>
                            <p className="title">夯实JS系列--变量、作用域和内存问题</p>
                            <p className="title">这里应该有摘要的，因为设计的数据库表表结构的时候忘记了，后面也是懒得加了，感觉太麻烦了，就算了</p>
                        </div>
                        <div>
                            <Icon type="clock-circle" theme="outlined"/>
                            <span> 2018-09-03 </span>
                            <Icon type="eye" theme="outlined"/>
                            <span> 10</span>
                            <Icon type="message" theme="outlined"/>
                            <span>1</span>
                            <span >阅读全文</span>
                        </div>
                    </Col>
                </Row>
                <Row >
                    <Col span={8}><img src=""/></Col>
                    <Col span={16}>
                        <div>
                            <p className="title">夯实JS系列--变量、作用域和内存问题</p>
                            <p className="title">这里应该有摘要的，因为设计的数据库表表结构的时候忘记了，后面也是懒得加了，感觉太麻烦了，就算了</p>
                        </div>
                        <div>
                            <Icon type="clock-circle" theme="outlined"/>
                            <span> 2018-09-03 </span>
                            <Icon type="eye" theme="outlined"/>
                            <span> 10</span>
                            <Icon type="message" theme="outlined"/>
                            <span>1</span>
                            <span >阅读全文</span>
                        </div>
                    </Col>
                </Row>
            </div>
        </Content>
    }

}


export default  _Content;