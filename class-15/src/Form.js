import React, { Component } from 'react';
import './Form.css';
import { Redirect } from 'react-router-dom';

class Form extends Component { // Smart component
	constructor(props) { // Props are passed here (e.g. heading)
		super();
		this.heading = props.heading;
	}

	state = {
		amount: 0,
		apr: 0,
		months: 0,
		monthlyPayment: 0
	}

	onAmountChange(e) { // Capture the amount typed into the input and store in state
		const newState = {
			amount: e.target.value
		}; // Updated state
		this.setState(newState); // Update the state and refresh the component
	}

	onAprChange(e) { // Capture the amount typed into the input and store in state
		const newState = {
			apr: e.target.value
		}; // Updated state
		this.setState(newState); // Update the state and refresh the component
	}

	onMonthsChange(e) { // Capture the amount typed into the input and store in state
		const newState = {
			months: e.target.value
		}; // Updated state
		this.setState(newState); // Update the state and refresh the component
	}

	calculatePayment(e) {
		e.preventDefault();

		const monthlyRate = (this.state.apr/100)/12;
		const x = (Math.pow((1+monthlyRate), this.state.months) - 1);
		const monthlyPayment = Math.round(
			(this.state.amount * x * monthlyRate)/(x-1)
		);

		const newState = {
			monthlyPayment,
			redirect: true
		};

		return this.setState(newState);
	}

	render() { // We return the component HTML in this function
		if (this.state.redirect) {
			return <Redirect to={"/results?value=" + this.state.monthlyPayment} />;
		}

		return (
			<form>
				<h2>
					{this.heading}
				</h2>

				<label>
					Loan Amount
				</label>

				<input onChange={(e) => this.onAmountChange(e)} type="number" name="amount" placeholder="Type in a number" />

				<label>
					Yearly APR
				</label>

				<input onChange={(e) => this.onAprChange(e)} type="number" name="apr" placeholder="Type in a number" />

				<label>
					Loan Length
				</label>

				<input onChange={(e) => this.onMonthsChange(e)} type="number" name="months" placeholder="Type in a number" />

				<button onClick={(e) => this.calculatePayment(e)}>
					Calculate
				</button>
			</form>
		);
	}
}

export default Form;