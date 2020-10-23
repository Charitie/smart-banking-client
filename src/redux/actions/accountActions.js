import { axiosInstance } from "../../util/axiosInstance";
import {
	CLEAR_ERROR,
	DEPOSIT_FAIL,
	DEPOSIT_SUCCESS,
	GET_BALANCE_FAILED,
	GET_BALANCE_SUCCESS,
	TRANSFER_FAIL,
	TRANSFER_SUCCESS,
	WITHDRAWAL_FAIL,
	WITHDRAWAL_SUCCESS,
} from "./types";
import {
	openDepositModal,
	openTransferModal,
	openWithdrawModal,
} from "./modalActions";

//clear error
export const clearError = () => {
	return {
		type: CLEAR_ERROR,
	};
};

//deposit
export const depositSuccess = (amount) => {
	return { type: DEPOSIT_SUCCESS, payload: amount };
};

export const depositFailed = (error) => {
	return {
		type: DEPOSIT_FAIL,
		payload: error,
	};
};

export const deposit = (amount) => {
	return async (dispatch) => {
		try {
			const response = await axiosInstance.post("/accounts/deposit", amount);

			dispatch(depositSuccess(response.data));
			dispatch(openDepositModal());
		} catch (error) {
			dispatch(
				depositFailed({
					message: error.response.data.message,
					type: "deposit",
				})
			);
			setTimeout(() => {
				dispatch(clearError());
			}, 5000);
		}
	};
};

//withdraw
export const withdrawSuccess = (amount) => {
	return { type: WITHDRAWAL_SUCCESS, payload: amount };
};

export const withdrawFailed = (error) => {
	return {
		type: WITHDRAWAL_FAIL,
		payload: error,
	};
};

export const withdraw = (amount) => {
	return async (dispatch) => {
		try {
			const response = await axiosInstance.post("/accounts/withdraw", amount);

			dispatch(withdrawSuccess(response.data));
			dispatch(openWithdrawModal());
		} catch (error) {
			dispatch(
				withdrawFailed({
					message: error.response.data.message,
					type: "withdraw",
				})
			);
			setTimeout(() => {
				dispatch(clearError());
			}, 5000);
		}
	};
};

//transfer
export const transferSuccess = (transfer) => {
	return { type: TRANSFER_SUCCESS, payload: transfer };
};

export const transferFailed = (error) => {
	return {
		type: TRANSFER_FAIL,
		payload: error,
	};
};

export const transfer = (transfer) => {
	return async (dispatch) => {
		try {
			const response = await axiosInstance.post("/accounts/transfer", transfer);

			dispatch(transferSuccess(response.data));
			dispatch(openTransferModal());
		} catch (error) {
			const errors = error.response.data.errors;
			const err = error.response.data.message;

			if (errors) {
				errors.forEach((error) =>
					dispatch(transferFailed({ message: error.msg, type: "transfer" }))
				);
			}
			if (err) {
				dispatch(
					transferFailed({
						message: error.response.data.message,
						type: "transfer",
					})
				);
			}
			setTimeout(() => {
				dispatch(clearError());
			}, 5000);
		}
	};
};

//get balance
export const getBalanceSuccess = (balance) => {
	return { type: GET_BALANCE_SUCCESS, payload: balance };
};

export const getBalanceFailed = (error) => {
	return {
		type: GET_BALANCE_FAILED,
		payload: error,
	};
};

export const getBalance = () => {
	return async (dispatch) => {
		try {
			const response = await axiosInstance.get("/accounts/balance");
			dispatch(getBalanceSuccess(response.data.balance));
		} catch (error) {
			dispatch(getBalanceFailed(error.response.data));
		}
	};
};
