import React from "react";
import {
    Form, Input, Button,
} from 'antd';

class ArticleForm extends React.Component {


    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.addArticle(values);
            }
        });
    }


    render() {
        const {getFieldDecorator} = this.props.form;
        return <Form onSubmit={this.handleSubmit}>
            <Form.Item
                label="title"
                labelCol={{span: 5}}
                wrapperCol={{span: 12}}
            >
                {getFieldDecorator('title', {
                    rules: [{required: true, message: '请输入标题'}],
                })(
                    <Input />
                )}
            </Form.Item>
            <Form.Item
                label="description"
                labelCol={{span: 5}}
                wrapperCol={{span: 12}}
            >
                {getFieldDecorator('description', {
                    rules: [{required: true, message: '请输入描述'}],
                })(
                    <Input />
                )}
            </Form.Item>
            <Form.Item
                label="content"
                labelCol={{span: 5}}
                wrapperCol={{span: 12}}
            >
                {getFieldDecorator('content', {
                    rules: [{required: true, message: '请输入内容'}],
                })(
                    <Input />
                )}
            </Form.Item>
            <Form.Item
                label="img"
                labelCol={{span: 5}}
                wrapperCol={{span: 12}}
            >
                {getFieldDecorator('img', {
                    rules: [{required: true, message: '图片地址'}],
                })(
                    <Input />
                )}
            </Form.Item>
            <Form.Item
                label="publishDate"
                labelCol={{span: 5}}
                wrapperCol={{span: 12}}
            >
                {getFieldDecorator('publishDate', {
                    rules: [{required: true, message: '发布时间'}],
                })(
                    <Input />
                )}
            </Form.Item>

            <Form.Item
                wrapperCol={{span: 12, offset: 5}}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    }

}


export default  Form.create({})(ArticleForm);