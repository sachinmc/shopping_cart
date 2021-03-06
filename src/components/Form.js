import React from 'react';
import store from '../store.js';


function generateId() {
	return Math.random() * 1000;
}

export default class Form extends React.Component {
	state = {
		id: this.props.id || generateId(),
		title: this.props.title || '',
		price: this.props.price || '',
		quantity: this.props.quantity || '',
	}

	handleInputChange = (evt) => {
		let name = evt.target.name;
		let value = evt.target.value;

		this.setState({
			[name]: value
		})

	}

	handleFormSubmit = (evt) => {
		evt.preventDefault()
		let product = Object.assign({}, this.state);

		this.props.toggleEditState && this.props.toggleEditState();

		store.dispatch({ type: 'EDIT_PRODUCT', item: product });

		this.setState({
			title: '',
			price: '',
			quantity: '',
		})
	}

	render () {
		return (
			<form>
			  <div className="input-group">
			    <label htmlFor="product-name">Product Name</label>
			    <input name="title"
			    			 type="text"
			    			 id="product-name"
			    			 value={this.state.title}
			    			 onChange={this.handleInputChange}
			    />
			  </div>

			  <div className="input-group">
			    <label htmlFor="product-price">Price</label>
			    <input name="price"
			     			 type="text"
			     			 id="product-price"
			     			 value={this.state.price}
			     			 onChange={this.handleInputChange}
			     />
			  </div>

			  <div className="input-group">
			    <label htmlFor="product-quantity">Quantity</label>
			    <input name="quantity"
			    			 type="text"
			    			 id="product-quantity"
			    			 value={this.state.quantity}
			    			 onChange={this.handleInputChange}
			    />
			  </div>

			  <div className="actions form-actions">
			    <a className="button" onClick={this.handleFormSubmit}>{this.props.submitText}</a>
			    <a className="button">Cancel</a>
			  </div>
			</form>
		)
	}

}
