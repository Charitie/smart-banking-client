import React, { useState } from "react";
import { renderError } from "../RenderError";
import { closeModal } from "../../redux/actions/modalActions";
import Modal from "../Modal/Modal";
import { connect } from "react-redux";

const Transfer = ({
	transfer,
	transferAmount,
	message,
	error,
	openModal,
	closeModal,
	toAccountNumber,
}) => {
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
			{openModal ? (
				<Modal
					amount={transferAmount}
					close={closeModal}
					message={message}
					accountNumber={toAccountNumber}
				/>
			) : (
				""
			)}
			{renderError(error, "transfer")}

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
					required
				/>
			</div>

			<div className='transaction__action'>
				<span>$ </span>
				<input
					className='transfer-input__amount'
					type='text'
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

const mapStateToProps = (state) => ({
	openModal: state.modal.openTransfer,
	message: state.account.message,
	transferAmount: state.account.amount,
	toAccountNumber: state.account.accountNumber,
	error: state.account.error,
});

export default connect(mapStateToProps, { closeModal })(Transfer);
