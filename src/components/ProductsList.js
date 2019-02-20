import React from 'react';
import Product from './Product';

export default class ProductsList extends React.Component {
  
  
  render() {
    let products = this.props.products.map((item) => {
      return <Product
              key={item.id}
              {...item}
              addProductToCart={this.props.addProductToCart}
              handleFormSubmit={this.props.handleEditFormSubmit}
              />
    });
    return (
      <div className="product-listing">
        <h2>Products</h2>
        { products }
      </div>
    );
  }
}
