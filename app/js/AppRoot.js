import React, { useEffect } from 'react';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { setNavigate } from './navigation';
import Home from './pages/Home';
import Items from './pages/Items';
import Events from './pages/Events';

function AppRoot() {
  const navigate = useNavigate();
  useEffect(() => {
    setNavigate(navigate);
  }, [navigate]);

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/items/detail/:id" element={<Items />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/detail/:id" element={<Events />} />
        </Routes>
      </div>
    </div>
  );
}

export default AppRoot;
