import  React from "react";
import {Layout, Menu, Icon} from 'antd';
import PropTypes from 'prop-types';
import less from "./_Sider.less";
const {Sider} = Layout;
const {SubMenu} = Menu;


class _Sider extends React.Component {


    constructor(props) {
        super(props);
        this.state = {collapsed: false};
    }


    componentDidMount() {
        this.props.getHomeNavList();
    }

    onCollapse = (collapsed) => {
        this.setState({collapsed});
    }

    onChooseNavigation = ({navName, subNavName,navId,subNavId}) => {
        return () => {
            if (subNavName) {
                this.props.history.push("/" + navName + "/" + subNavName);
                this.props.getHomeArticleList({navId,subNavId})
            } else {
                this.props.history.push("/" + navName)
            }
        }

    }

    render() {
        var navList = this.props.navList;
        return <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
        >
            <div className="logo"/>
            <Menu theme="dark" defaultOpenKeys={navList.length > 0 ? [navList[0].id] : []} mode="inline">
                {navList.map((nav, index) => {
                    if (nav.subNav.length > 0) {
                        return <SubMenu
                            key={index}
                            title={<span><Icon type={nav.icon} theme="outlined"/><span>{nav.displayName}</span></span>}
                        >
                            {nav.subNav.map((subNav) => <Menu.Item
                                onClick={this.onChooseNavigation({navName:nav.displayName,subNavName:subNav.displayName,navId:nav.id,subNavId:subNav.id})}
                                key={"subNav" + subNav.name}>{subNav.displayName}</Menu.Item>
                            )}
                        </SubMenu>
                    } else {
                        return <Menu.Item key={"nav_" + nav.name}
                                          onClick={this.onChooseNavigation({navName:nav.displayName})}>
                            <Icon type={nav.icon} theme="outlined"/>
                            <span>{nav.displayName}</span>
                        </Menu.Item>
                    }
                })}
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