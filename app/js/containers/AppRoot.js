import React from 'react';

import NavLink from '../components/NavLink'

class AppRoot extends React.Component {

    render() {
        return (
            <div>
                <div className="navbar navbar-inverse navbar-fixed-top" style={{marginBottom: '0px'}}>
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
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default AppRoot;
