import React from 'react';
import Form from './Form';

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
		this.props.onFormSubmit(newProduct);

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
