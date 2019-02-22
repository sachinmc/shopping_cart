import React from 'react';
import data from '../lib/data';
import {Route, Switch} from 'react-router-dom';
import ProductsList from './ProductsList';
import Cart from './Cart';
import ToggleableForm from './ToggleableForm';

export default class ProductsDashboard extends React.Component {
  state = {
    productData: data,
    cart: []
  }

  handleAddFormSubmit = (newProduct) => {
    newProduct.quantity = Number(newProduct.quantity);
    newProduct.price = Number(newProduct.price);

    this.setState({
      productData: [...this.state.productData, newProduct]
    })
  }

  handleEditFormSubmit = (updatedProduct) => {
    let updatedProducts = this.state.productData.map((item) => {

    if (item.id === updatedProduct.id) {
      return Object.assign({}, item, {
        quantity: updatedProduct.quantity,
        title: updatedProduct.title,
        price: updatedProduct.price,
      });
    }
      return item;
    });

    this.setState({
      productData: updatedProducts
    })
  }

  handleCheckoutClick = () => {
    this.setState({
      cart: [],
    })
  }

  addProductToCart = (id) => {
    let new_data = this.state.productData.map((item) => {
      if (item.id === id) {
        return Object.assign({}, item, {
          quantity: item.quantity - 1,
        });
      }
      return item;
    });
    this.setState({
      productData: new_data
    });

    if (this.state.cart.find( (product) => id === product.id)) {
      let new_cart = this.state.cart.map((item) => {
        if (item.id === id) {
          return Object.assign({}, item, {
            quantity: item.quantity + 1,
          })
        }
        return item;
      });

      this.setState({
        cart: new_cart
      });
    } else {
      let new_item = Object.assign({}, this.state.productData.find( (product) => id === product.id));
      new_item.quantity = 1;

      this.setState({
        cart: [...this.state.cart, new_item]
      });
    }
  };

  render() {

    return (
      <Switch>
        <Route path="/" exact render={(props) => {
            return (
              <div>

                <header>
                  <h1>The Shop!</h1>
                  <Cart cart={this.state.cart} onCheckoutClick={this.handleCheckoutClick}/>
                </header>

                <main>
                  <ProductsList
                    products= {this.state.productData}
                    addProductToCart={this.addProductToCart}
                    handleEditFormSubmit={this.handleEditFormSubmit}
                  />
                  <ToggleableForm onFormSubmit={this.handleAddFormSubmit}/>
                </main>


              </div>
            );

          }}>
        </Route>

        <Route path="/products/:id" exact render={(props) => {
            let id = props.match.params.id;
            let product = this.state.productData.find((item) => item.id === Number(id));

            if (product) {
              return (
                <div className="product">
                  <div className="product-details">
                    <h3>{product.title}</h3>
                    <p className="price">{product.price}</p>
                    <p className="quantity">{product.quantity} left in stock</p>
                  </div>
                </div>
              );
            } else {
              return null;
            }

            }
          }>
        </Route>

      </Switch>


    );
  }
}
