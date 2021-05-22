import React, { Component } from 'react';

class Results extends Component {
	constructor(props) {
		super();

		this.payment = new URLSearchParams(props.location.search).get('value');
	}

	render() {
		return (
			<center>
				Your monthly payment will be ${this.payment}.
			</center>
		);
	}
}

export default Results;