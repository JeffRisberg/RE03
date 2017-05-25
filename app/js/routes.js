import React from "react";
import {Route, IndexRoute} from "react-router";
import AppRoot from "./AppRoot";
import Home from "./components/Home";
import ItemListContainer from "./components/Items/ItemListContainer";
import ItemFormContainer from "./components/Items/ItemFormContainer";
import EventListContainer from "./components/Events/EventListContainer";
import EventFormContainer from "./components/Events/EventFormContainer";

export default (
    <Route path="/" component={AppRoot}>
        <IndexRoute component={Home}/>
        <Route path="items">
            <IndexRoute component={ItemListContainer}/>
            <Route path="detail/:id" component={ItemFormContainer}/>
        </Route>
        <Route path="events">
            <IndexRoute component={EventListContainer}/>
            <Route path="detail/:id" component={EventFormContainer}/>
        </Route>
    </Route>
);
