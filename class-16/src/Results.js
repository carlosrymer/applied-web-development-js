import React from 'react';
import { useSelector } from 'react-redux';

function Results() {
	const amount = useSelector(state => state.monthlyPayment.amount);
	return (
		<center>
			Your monthly payment will be ${amount}.
		</center>
	);
}

export default Results;