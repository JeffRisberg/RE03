import React from 'react';
import ReactDOM from 'react-dom';

import NavLink from './NavLink'

class AppRoot extends React.Component {

    render() {
        return (
            <div>
                <div className="navbar" style={{marginBottom: '0px'}}>
                    <div className="navbar-inner">
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav" style={{background: '#ddd'}}>
                                <li><NavLink to="/items">Items</NavLink></li>
                                <li><NavLink to="/events">Events</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default AppRoot;
