import React from "react";
import {Route, IndexRoute} from "react-router";
import AppRoot from "./containers/AppRoot";
import Home from "./components/Home";
import ItemPage from "./containers/ItemPage";
import ItemDetail from "./components/Items/ItemDetail";
import EventPage from "./containers/EventPage";
import EventDetail from "./components/Events/EventDetail";

export default (
    <Route path="/" component={AppRoot}>
        <IndexRoute component={Home}/>
        <Route path="items">
            <IndexRoute component={ItemPage}/>
            <Route path="detail/:id" component={ItemDetail}/>
        </Route>
        <Route path="events">
            <IndexRoute component={EventPage}/>
            <Route path="detail/:id" component={EventDetail}/>
        </Route>
    </Route>
);
