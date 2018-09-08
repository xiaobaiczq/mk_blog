import  React from "react";
import {Layout, Pagination} from 'antd';
const {Footer} = Layout;


class _Footer extends React.Component {


    constructor(props) {
        super(props);
    }


    render() {
        return <Footer style={{textAlign: 'center'}}>
            Ant Design ©2018 Created by Ant UED
        </Footer>

    }
}


export default _Footer;