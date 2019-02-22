import React from  'react';
import store from '../store.js';


export default class Cart extends React.Component {
  cartEmpty = () => (
    <div className="cart">
      <h2>Your Cart</h2>
      <p>Your cart is empty</p>
      <p>Total: $0</p>
      <a className="button checkout disabled">Checkout</a>
    </div>
  );

  cartTotal = () => {
    let total = 0;
    store.getState().cart.forEach((item) => (
      total += item.price*item.quantity
    ))

    return total.toFixed(2);
  };

  handleCheckout = (evt) => {
    evt.preventDefault();

    this.props.onCheckoutClick();
  }

  render() {
    if (store.getState().length === 0) {
      return this.cartEmpty();
    } else {
      // console.log(this.props.cart);
      return (
        <div className="cart">
          <h2>Your Cart</h2>
          <table className="cart-items"><thead><tr><th>Item</th><th>Quantity</th><th>Price</th></tr></thead><tbody>
          {store.getState().cart.map( (product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
            </tr>
          ))}
          </tbody></table>
          <p>Total: ${this.cartTotal()}</p>
          <a className="button checkout" onClick={this.handleCheckout}>Checkout</a>
        </div>
      );
    }
  }
}
