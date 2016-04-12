import React from 'react';
import Item from './Item';

/**
 * The Cart component contains a list of Items
 */
class Cart extends React.Component {

  render () {
    return <div className="cart">
      <h2>Cart: {this.props.cart.title}</h2>
      <table className="table">
        {this.props.cart.items.map(function (item, key) {
          return <Item key={key} item={item} />;
        })}
      </table>
    </div>;
  }
}

export default Cart;
