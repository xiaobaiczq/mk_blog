import  React from "react";
import {Layout, Menu, Icon} from 'antd';
import PropTypes from 'prop-types';
const {Sider} = Layout;


class _Sider extends React.Component {


    constructor(props) {
        super(props);
    }

    onChangeNav = (location) => {
        return () => this.props.history.push(location);
    }


    render() {
        return <Sider>
            <div className="logo"/>
            <Menu theme="dark" mode="inline">
                <Menu.Item key="1" onClick={this.onChangeNav('/admin/article/manage')}>
                    <Icon type="pie-chart"/>
                    <span>文章管理</span>
                </Menu.Item>
                <Menu.Item key="2" onClick={this.onChangeNav('/admin/user/manage')}>
                    <Icon type="desktop"/>
                    <span>用户管理</span>
                </Menu.Item>
                <Menu.Item key="3" onClick={this.onChangeNav('/admin/tag/manage')}>
                    <Icon type="file"/>
                    <span>标签管理</span>
                </Menu.Item>
                <Menu.Item key="4"  onClick={this.onChangeNav('/admin/article/create')}>
                    <Icon type="file"/>
                    <span>发表文章</span>
                </Menu.Item>
            </Menu>
        </Sider>
    }

}

_Sider.propTypes = {
    navList: PropTypes.array
}

_Sider.defaultProps = {
    navList: []
};

export default  _Sider;