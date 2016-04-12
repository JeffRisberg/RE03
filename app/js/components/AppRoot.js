import React from 'react';
import ReactDOM from 'react-dom';

import store from '../store';

import Cart from './Cart';
import Channel from './Channel';

class AppRoot extends React.Component {

  render () {
    console.log(store);
    return <div className="container">
      <h1>RE03 Inventory</h1>
      <Cart cart={store.getState().cart} />
      <Channel channel={store.getState().channel} />
    </div>;
  }
}

export default AppRoot;
