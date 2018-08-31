import store from "./store/store";
import React from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";
import Routes from "./router/route";


document.body.innerHTML = "<div id='root'></div>";


ReactDom.render(
    <Provider store={store}>
        <Routes/>
    </Provider>, document.getElementById("root")
);



