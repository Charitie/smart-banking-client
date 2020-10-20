import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const Deposit = ({ deposit, alerts, loading }) => {
	const [amount, setAmount] = useState('');

	const handleChange = (event) => {
		setAmount(event.target.value);
	};

	const handleSumit = (event) => {
		event.preventDefault();

		deposit({ amount });
		setAmount('');
	};

	return (
		<div className='transaction'>
			<label>Deposit</label>
			<Form
				onSubmit={handleSumit}
				className='transaction__action'>
				<span>$ </span>
				<input
					type='number'
					placeholder='Enter Amount'
					name='amount'
					value={amount}
					onChange={handleChange}
				/>
				<input className='submit-button' type='submit' value='Deposit' />
			</Form>
		</div>
	);
};

export default Deposit;
