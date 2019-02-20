import React from 'react';

export default class ProductAction extends React.Component {
  handleAddToCart = () => {
    this.props.addProductToCart(this.props.id);
  }

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
             onClick={this.handleAddToCart}
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
