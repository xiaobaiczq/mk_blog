import {Switch, Route, HashRouter as Router} from 'react-router-dom';
import React from "react";
import Layout from "../component/layout/_Layout";


export default function Routes() {
    return <Router>
        <Switch>
            <Route exact path="/" component={Layout}/>
        </Switch>
    </Router>
}