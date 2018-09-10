import React from "react";
import PropTypes from "prop-types";

import { Form, Select, Input, Button } from 'antd';
import Ediror from "../../common/editor/Editor"

const FormItem = Form.Item;
const Option = Select.Option;

class ArticleCreate extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    handleSelectChange = (value) => {
        console.log(value);
        this.props.form.setFieldsValue({
            note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form  layout="inline" onSubmit={this.handleSubmit}>
                <FormItem
                    label="标题"
                >
                    {getFieldDecorator('note', {
                        rules: [{ required: true, message: 'Please input your note!' }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    label="标签"
                >
                    {getFieldDecorator('gender', {
                        rules: [{ required: true, message: 'Please select your gender!' }],
                    })(
                        <Select  style={{ width: 200 }}>
                            <Option value="lucy">lucy</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </FormItem>
                <Ediror/>
            </Form>
        );
    }
}

export default Form.create()(ArticleCreate);
