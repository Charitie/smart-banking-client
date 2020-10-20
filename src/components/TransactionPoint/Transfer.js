import React, { useState } from "react";

const Transfer = ({ transfer }) => {
	const [amount, setAmount] = useState("");
	const [toAccount, setToAccount] = useState("");

	const handleSumit = (event) => {
		event.preventDefault();

		transfer({ toAccount, amount });
		setAmount("");
		setToAccount("");
	};

	return (
		<form onSubmit={handleSumit} className='transaction'>
			<label>Transfer Money</label>
			<div className='transaction__action transaction__action--account-input'>
				<span>To</span>
				<input
					className='transfer-input__account-number'
					type='number'
					placeholder='Enter Account Number'
					name='toAccount'
					value={toAccount}
					onChange={(event) => setToAccount(event.target.value)}
				/>
			</div>

			<div className='transaction__action'>
				<span>$ </span>
				<input
					className='transfer-input__amount'
					type='number'
					placeholder='Enter Amount'
					name='name'
					value={amount}
					onChange={(event) => setAmount(event.target.value)}
				/>
				<input className='submit-button' type='submit' value='Transfer' />
			</div>
		</form>
	);
};

export default Transfer;
