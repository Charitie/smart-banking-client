import React, { useState } from "react";

const Withdrawal = ({ withdraw }) => {
	const [amount, setAmount] = useState('');

	const handleChange = (event) => {
		setAmount(event.target.value);
	};

	const handleSumit = (event) => {
		event.preventDefault();

		withdraw({ amount });
		setAmount('');
	};

	return (
		<div className='transaction'>
			<label>Withdrawal</label>
			<form onSubmit={handleSumit} className='transaction__action'>
				<span>$ </span>
				<input
					type='number'
					placeholder='Enter Amount'
					onChange={handleChange}
					value={amount}
				/>
				<input className='submit-button' type='submit' value='Withdrawal' />
			</form>
		</div>
	);
};

export default Withdrawal;
