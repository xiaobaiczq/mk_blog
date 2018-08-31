import {Switch, Route, HashRouter as Router} from 'react-router-dom';
import React from "react";
import Home from "../container/homeContainer";


export default function Routes() {
    return <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
        </Switch>
    </Router>
}