import React from "react";
import {Layout, Breadcrumb, Spin} from 'antd';
import "./Login.less";

import {
    Form, Icon, Input, Button, Checkbox,
} from 'antd';

export  default  class Login extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }


    render() {
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Username"/>
                </Form.Item>
                <Form.Item>
                    <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                           placeholder="Password"/>
                </Form.Item>
                <Form.Item>
                    <Checkbox>Remember me</Checkbox>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        );
    }

}


