import React from 'react';
import {Link} from 'react-router-dom';
import ProductAction from './ProductAction';
import Form from './Form';

export default class Product extends React.Component {
  state = {
    editing: false
  }

  toggleEditState = () => {
    this.setState({
      editing: !this.state.editing
    })
  }

  render() {
    let { id, title, quantity, price } = this.props;
    return (
      <div className="product">
        <div className="product-details">
          <h3>{title}</h3>
          <p className="price">{price}</p>
          <p className="quantity">{quantity} left in stock</p>
          <ProductAction
            id={id}
            quantity={quantity}
            addProductToCart={this.props.addProductToCart}
            toggleEditState={this.toggleEditState}
          />
          <a className="delete-button"><span>X</span></a>
        </div>
        <p></p>

        <Link to={`/products/${id}`} className="button">Show Product</Link>


        {this.state.editing ? <Form id={id}
                                    title={title}
                                    quantity={quantity}
                                    price={price}
                                    onFormSubmit={this.props.handleFormSubmit}
                                    toggleEditState={this.toggleEditState}
                                    submitText="Update"
                              /> : ''}
      </div>
    );
  }
}
