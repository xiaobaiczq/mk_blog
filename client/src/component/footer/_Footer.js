import  React from "react";
import {Layout, Pagination} from 'antd';
const {Footer} = Layout;


class _Footer extends React.Component {


    constructor(props) {
        super(props);
    }


    render() {
        return <Footer style={{textAlign: 'center'}}>
            <Pagination defaultCurrent={1} total={50}/>
        </Footer>

    }
}


export default _Footer;