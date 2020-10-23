import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "../Modal/Modal";
import { closeModal } from "../../redux/actions/modalActions";
import { renderError } from '../RenderError';

const Deposit = ({
	deposit,
	openModal,
	closeModal,
	message,
	depositAmount,
	error,
}) => {
	const [amount, setAmount] = useState("");


	const handleChange = (event) => {
		setAmount(event.target.value);
	};

	const handleSumit = (event) => {
		event.preventDefault();

		deposit({ amount });

		setAmount("");
	};

	return (
		<div className='transaction'>
			{openModal ? (
				<Modal amount={depositAmount} close={closeModal} message={message} />
			) : (
				""
			)}
			{renderError(error, 'deposit')}
			<label>Deposit</label>
			<form onSubmit={handleSumit} className='transaction__action'>
				<span>$ </span>
				<input
					type='number'
					placeholder='Enter Amount'
					name='amount'
					value={amount}
					onChange={handleChange}
					required
				/>
				<input className='submit-button' type='submit' value='Deposit' />
			</form>
		</div>
	);
};

const mapStateToProps = (state) => ({
	openModal: state.modal.openDeposit,
	message: state.account.message,
	depositAmount: state.account.amount,
	error: state.account.error,
});

export default connect(mapStateToProps, { closeModal })(Deposit);
