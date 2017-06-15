import React from "react";
import {Route, IndexRoute} from "react-router";
import AppRoot from "./AppRoot";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Events from "./pages/Events";

export default (
    <Route path="/" component={AppRoot}>
        <IndexRoute component={Home}/>
        <Route path="items">
            <IndexRoute component={Items}/>
            <Route path="detail/:id" component={Items}/>
        </Route>
        <Route path="events">
            <IndexRoute component={Events}/>
            <Route path="detail/:id" component={Events}/>
        </Route>
    </Route>
);
