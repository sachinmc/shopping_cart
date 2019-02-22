import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ProductsList from './ProductsList';
import Cart from './Cart';
import ToggleableForm from './ToggleableForm';
import store from '../store.js';
import data from '../lib/data';



export default class ProductsDashboard extends React.Component {
  state = {
    productData: data,
    cart: []
  }

  componentDidMount = () => {
    store.dispatch({ type: 'PRODUCTS_RECEIVED', productData: data, });
    store.subscribe(() => ( this.forceUpdate() ));
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
    store.dispatch({ type: 'HANDLE_CHECKOUT' });
  }


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
                    products= {store.getState().productData}
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
