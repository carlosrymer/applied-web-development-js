import React, { Component } from 'react';
import './Form.css';

class Form extends Component { // Smart component
	constructor(props) { // Props are passed here (e.g. heading)
		super();
		this.heading = props.heading;
	}

	render() { // We return the component HTML in this function
		return (
			<form>
				<h2>
					{this.heading}
				</h2>

				<label>
					Name
				</label>

				<input type="text" name="name" placeholder="Your name" />

				<button>
					Submit
				</button>
			</form>
		);
	}
}

export default Form;