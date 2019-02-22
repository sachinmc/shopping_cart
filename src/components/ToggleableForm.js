import React from 'react';
import Form from './Form';
import store from '../store.js';


export default class ToggleableForm extends React.Component {
	state = {
		formOpen: false,
	}

	handleAddClick = (evt) => {
		evt.preventDefault();

		this.setState({
			formOpen: true,
		})
	}


	handleFormSubmit = (newProduct) => {
		newProduct.quantity = Number(newProduct.quantity);
    newProduct.price = Number(newProduct.price);

    store.dispatch({ type: 'ADD_NEW_PRODUCT', item: newProduct})


		this.setState({
			formOpen: false,
		})
	}

	render () {
		if (this.state.formOpen) {
			return (
				<Form
					onFormSubmit={this.handleFormSubmit}
					submitText="Add"
				/>
    	)
  	} else {
			return (
				<div className="add-form">
					<p><a className="button add-product-button" onClick={this.handleAddClick}>Add A Product</a></p>
				</div>
			)
  	}
	}
}
