import React from "react";
import PropTypes from "prop-types";

import {Form, Select, Input, Button, TreeSelect} from 'antd';
import Ediror from "../../common/editor/Editor"

const FormItem = Form.Item;

class ArticleCreate extends React.Component {

    state = {
        title: "",
        subNavId: "",
        content: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (!this.state.content) {
                    alert("content not be empty");
                }
                console.log(this.state)
                console.log('Received values of form: ', values);
            }
        });
    }

    handleEditorChange = (html) => {
        this.setState({content: html});
    }


    render() {
        const {getFieldDecorator} = this.props.form;
        const treeData = [{
            title: '随笔',
            value: '1',
            key: '1',
            children: [{
                title: 'Javascript',
                value: '1',
                key: '1',
            }, {
                title: 'NodeJS',
                value: '2',
                key: '2',
            }],
        }];
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <FormItem
                    label="标题"
                >
                    {getFieldDecorator('title', {
                        initialValue: "",
                        rules: [{required: true, message: 'Please input your title!'}],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    label="标签"
                >
                    {getFieldDecorator('subNavId', {
                        initialValue: "",
                        rules: [{required: true, message: 'Please input your title!'}],
                    })(
                        <TreeSelect
                            style={{width: 200}}
                            dropdownStyle={{maxHeight: 400, overflow: 'auto'}}
                            treeData={treeData}
                            placeholder="Please select"
                            treeDefaultExpandAll
                        />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </FormItem>
                <Ediror handleEditorChange={this.handleEditorChange}/>
            </Form>
        );
    }
}

export default Form.create()(ArticleCreate);
