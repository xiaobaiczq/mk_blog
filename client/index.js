import React from 'react';
import ReactDOM from 'react-dom';
import "./src/public/test.css"
import {startRedux} from "./src/store/store"
[1].map((i)=>{
    console.log(i);
});

ReactDOM.render(
<h1>Hello, world!</h1>,
    document.getElementsByTagName("body")[0]
);
startRedux();
