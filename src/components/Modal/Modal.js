import React from "react";
import "./Modal.scss";
import { ReactComponent as Checked } from "../../assets/SVG/checkbox-checked.svg";
import { ReactComponent as Close } from "../../assets/SVG/cancel-circle.svg";
import Backdrop from "../Backdrop/Backdrop";

const Modal = ({ close, amount, message, accountNumber }) => {
	return (
		<>
			<Backdrop display close={close} />
			<div className='modal-container'>
				<Close onClick={close} className='modal__close' />
				<div className='modal__content'>
					<Checked className='modal__checked' />
					<h2 className='modal__title'>Notification</h2>
					<p className='modal__text'>
						{message} <b> ${amount}</b> 
						{accountNumber !== undefined ? <span> to <b>{accountNumber}</b></span> : ""}
					</p>
				</div>
			</div>
		</>
	);
};

export default Modal;
