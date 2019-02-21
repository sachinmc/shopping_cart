import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import ProductsDashboard from './ProductsDashboard';

class Shop extends Component {
  render() {
    return (
      <div id="app">
        <ProductsDashboard />
      </div>
    );
  }
}

export default Shop;
