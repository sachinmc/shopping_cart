import { createStore } from 'redux';
import data from './lib/data';

let initialState = {
	productData: data,
	cart: [],
};

const reducer = (state={}, action) => {
  return {
    productData: productReducer(state.productData, action),
    cart: cartReducer(state.cart, action)
  };
 }

function productReducer(state = [], action) {
	if (action.type === 'ADD_NEW_PRODUCT') {
		return state.concat(action.item);
	} else if (action.type === 'EDIT_PRODUCT') {
		return state.map((product) => {
			if (action.item.id === product.id) {
				return Object.assign({}, action.item);
			} else {
				return product;
			}
		});
	} else if (action.type === 'PRODUCTS_RECEIVED') {
		return action.productData;
	} else if (action.type === 'ADD_TO_CART') {
		return state.map((product) => {
			if (action.item.id === product.id) {
				return Object.assign({}, product, { quantity: product.quantity - 1});
			} else {
				return product;
			}
		});
	} else {
		return state;
	}
}

function cartReducer(state = [], action) {

	if (action.type === 'ADD_TO_CART')  {
		let item_found = state.find( (product) => (action.item.id === product.id));

    if (item_found) {
    	return state.map(function (item) {
    		if (item_found === item) {
    			return Object.assign({}, item, { quantity: item.quantity + 1});
    		} else {
    			return item;
    		}
    	});
    } else {
    	let new_item = Object.assign({}, action.item, { quantity: 1 });
    	return [...state, new_item];
    }
  } else if (action.type === 'HANDLE_CHECKOUT') {
  	return [];
  } else {
  	return state;
  }
}



let store = createStore(reducer, initialState);

export default store;