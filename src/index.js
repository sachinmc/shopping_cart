import React from 'react';
import ReactDOM from 'react-dom';
import Shop from './components/Shop';
import {BrowserRouter as Router} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Shop />
  </Router>, 
  document.getElementById('root')
);
registerServiceWorker();

/*

Shop
  ProductsDashboard
    ProductsList
      Product
       ProductAction
  AddProduct


*/
