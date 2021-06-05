import React, { useState } from 'react';
import './Form.css';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setNewAmount } from './monthlyPaymentSlice';

function Form(props) { // Dumb component
	const { heading } = props;
	const [apr, setApr] = useState(0);
	const [months, setMonths] = useState(0);
	const [principal, setPrincipal] = useState(0);
	const amount = useSelector(state => state.monthlyPayment.amount);
	const dispatch = useDispatch();

	function calculatePayment(e) {
		e.preventDefault();

		const monthlyRate = (apr/100)/12;
		const x = (Math.pow((1+monthlyRate), months) - 1);
		const newAmount = Math.round(
			(principal * x * monthlyRate)/(x-1)
		);

		return dispatch(setNewAmount(newAmount));
	}

	console.log(amount);

	return amount > 0 ? 
		(
			<Redirect to={"/results"} />
		)
		: (
		<form>
			<h2>
				{heading}
			</h2>

			<label>
				Loan Amount
			</label>

			<input onChange={(e) => setPrincipal(e.target.value)} type="number" name="amount" placeholder="Type in a number" />

			<label>
				Yearly APR
			</label>

			<input onChange={(e) => setApr(e.target.value)} type="number" name="apr" placeholder="Type in a number" />

			<label>
				Loan Length
			</label>

			<input onChange={(e) => setMonths(e.target.value)} type="number" name="months" placeholder="Type in a number" />

			<button onClick={(e) => calculatePayment(e, apr, principal, months, dispatch)}>
				Calculate
			</button>
		</form>
	);
}

export default Form;