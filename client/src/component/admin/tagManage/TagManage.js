import React from "react";
import {Tabs, Tag} from 'antd';

const TabPane = Tabs.TabPane;

class TagManage extends React.Component {

    log(e) {
        console.log(e);
    }


    preventDefault(e) {
        e.preventDefault();
        console.log('Clicked! But prevent default.');
    }

    render() {
        return (
            <Tabs type="card">
                <TabPane tab="Tab 1" key="1">
                    <div>
                        <Tag>Tag 1</Tag>
                        <Tag><a href="https://github.com/ant-design/ant-design/issues/1862">Link</a></Tag>
                        <Tag closable onClose={this.log}>Tag 2</Tag>
                        <Tag closable onClose={this.preventDefault}>Prevent Default</Tag>
                    </div>
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                    <div>
                        <Tag>Tag 1</Tag>
                        <Tag><a href="https://github.com/ant-design/ant-design/issues/1862">Link</a></Tag>
                        <Tag closable onClose={this.log}>Tag 2</Tag>
                        <Tag closable onClose={this.preventDefault}>Prevent Default</Tag>
                    </div>
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    <div>
                        <Tag>Tag 1</Tag>
                        <Tag><a href="https://github.com/ant-design/ant-design/issues/1862">Link</a></Tag>
                        <Tag closable onClose={this.log}>Tag 2</Tag>
                        <Tag closable onClose={this.preventDefault}>Prevent Default</Tag>
                    </div>
                </TabPane>
            </Tabs>
        );
    }
}

export  default  TagManage;

