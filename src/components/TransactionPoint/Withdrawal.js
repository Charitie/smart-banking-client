import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "../Modal/Modal";
import { closeModal } from "../../redux/actions/modalActions";
import { renderError } from "../RenderError/index";

const Withdrawal = ({
	withdraw,
	openModal,
	withdrawal,
	closeModal,
	message,
	error,
}) => {
	const [amount, setAmount] = useState("");

	const handleChange = (event) => {
		setAmount(event.target.value);
	};

	const handleSumit = (event) => {
		event.preventDefault();

		withdraw({ amount });
		setAmount("");
	};
	
	return (
		<div className='transaction'>
			{openModal ? (
				<Modal amount={withdrawal} close={closeModal} message={message} />
			) : (
				""
			)}
			{renderError(error, "withdraw")}
			<label>Withdrawal</label>
			<form onSubmit={handleSumit} className='transaction__action'>
				<span>$ </span>
				<input
					type='number'
					placeholder='Enter Amount'
					onChange={handleChange}
					value={amount}
					required
				/>
				<input className='submit-button' type='submit' value='Withdrawal' />
			</form>
		</div>
	);
};

const mapStateToProps = (state) => ({
	openModal: state.modal.openWithdraw,
	message: state.account.message,
	withdrawal: state.account.amount,
	error: state.account.error,
});

export default connect(mapStateToProps, { closeModal })(Withdrawal);
