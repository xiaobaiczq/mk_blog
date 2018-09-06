import {Switch, Route, HashRouter as Router} from 'react-router-dom';
import React from "react";
import Home from "../component/home/Home";



export default function Routes() {
    return <Router>
        <Switch>
            <Route path="/" component={Home}/>
        </Switch>
    </Router>
}