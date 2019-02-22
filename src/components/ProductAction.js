import React from 'react';
import store from '../store.js';

export default class ProductAction extends React.Component {

   addProductToCart = (evt) => {
    store.dispatch({ type: 'ADD_TO_CART', 
    								 item: { id: this.props.id, 
    								 				 title: this.props.title, 
    								 				 quantity: this.props.quantity, 
    								 				 price: this.props.price } 
    								 			 });
  };

  outOfStock = () => (
    <div className="actions product-actions">
      <a className="button add-to-cart disabled">
        Add to Cart
      </a>
      <a className="button edit">Edit</a>
    </div>
  )

  handleEditClick = (evt) => {
    evt.preventDefault()

    this.props.toggleEditState();

    
  }

  render() {
    if (this.props.quantity === 0) {
      return this.outOfStock()
    } else {
      return (
        <div className="actions product-actions">
          <a className="button add-to-cart"
             onClick={this.addProductToCart}
          >
            Add to Cart
          </a>
          <a className="button edit"
             onClick={this.handleEditClick}>
             Edit</a>
        </div>)
    }
  }
}
