import React from "react";
import {Layout, Breadcrumb, Spin} from 'antd';
import "./Login.less";

import {
    Form, Icon, Input, Button, Checkbox,
} from 'antd';

class Login extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.userLogin(values,this.props.history);
            }

        });
    }


    componentDidUpdate() {
        // if (!this.props.userInfo || this.props.userInfo == {}) {
        //     this.props.history.push("/");
        // }
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{required: true, message: '请输入用户名'}],
                    })(
                        <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="xxx闪电"/>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: '请输入密码'}],
                    })(
                        <Input  type="password" prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="游戏结婚的那一天"/>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>记住我</Checkbox>
                    )}
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        );
    }

}

export  default  Form.create({})(Login);

