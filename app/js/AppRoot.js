import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Items from './pages/Items';
import Events from './pages/Events';

class AppRoot extends Component {

  render() {
    return (
      <div>
        <div className="navbar navbar-inverse navbar-fixed-top" style={{ marginBottom: '0px' }}>
          <div className="container">
            <div className="navbar-inner">
              <NavLink to="/" className="navbar-brand">RE03</NavLink>

              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li><NavLink to="/items">Items</NavLink></li>
                  <li><NavLink to="/events">Events</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <Route exact path="/" component={Home}/>
          <Route exact path="/items" component={Items}/>
          <Route exact path="/items/detail/:id" component={Items}/>
          <Route exact path="/events" component={Events}/>
          <Route exact path="/events/detail/:id?" component={Events}/>
        </div>
      </div>
    );
  }
}

export default AppRoot;
