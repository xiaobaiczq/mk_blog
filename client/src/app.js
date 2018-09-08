import store from "./store/store";
import React from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";
import Routes from "./route/Routes";
import mock from "./mock/mock";



document.body.innerHTML = "<div id='root'></div>";


ReactDom.render(
    <Provider store={store}>
        <Routes/>
    </Provider>, document.getElementById("root")
);



