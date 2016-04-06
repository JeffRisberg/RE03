import React from 'react/addons';
import Item from './Item';

/**
 * The Cart component contains a list of Items
 */
class Cart extends React.Component {

  shouldComponentUpdate () {
    return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  }

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

// Prop types validation
Cart.propTypes = {
  cart: React.PropTypes.object.isRequired
};

export default Cart;
