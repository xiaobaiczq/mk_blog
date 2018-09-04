import  React from "react";
import {Layout, Row, Col, Button} from 'antd';
const {Header} = Layout;

class _Header extends React.Component {


    constructor(props) {
        super(props);
    }


    render() {
        return <Header style={{background: '#fff', padding: 0}}>
            <Row justify="end" type="flex" style={{"textAlign": "center"}}>
                <Col span={2}>
                    <Button type="default" icon="user">登录</Button>
                </Col>
            </Row>
        </Header>
    }

}


export default  _Header;