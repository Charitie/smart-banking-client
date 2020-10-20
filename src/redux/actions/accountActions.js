import { axiosInstance } from "../../util/axiosInstance";
import {
	DEPOSIT_FAIL,
	DEPOSIT_SUCCESS,
	GET_BALANCE_FAILED,
	GET_BALANCE_SUCCESS,
	TRANSFER_FAIL,
	TRANSFER_SUCCESS,
	WITHDRAWAL_FAIL,
	WITHDRAWAL_SUCCESS,
} from "./types";
import { setAlert } from "./alertaction";

//deposit
export const depositSuccess = (amount) => {
	return { type: DEPOSIT_SUCCESS, payload: amount };
};

export const depositFailed = () => {
	return {
		type: DEPOSIT_FAIL,
	};
};

export const deposit = (amount) => {
	return async (dispatch) => {
		try {
			const response = await axiosInstance.post("/accounts/deposit", amount);

			dispatch(depositSuccess(response.data));
		} catch (error) {
			const errors = error.response.data.errors;
			if (errors) {
				errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
				dispatch(depositFailed(error.response.data));
			}
		}
	};
};

//withdraw
export const withdrawSuccess = (amount) => {
	return { type: WITHDRAWAL_SUCCESS, payload: amount };
};

export const withdrawFailed = () => {
	return {
		type: WITHDRAWAL_FAIL,
	};
};

export const withdraw = (amount) => {
	return async (dispatch) => {
		try {
			const response = await axiosInstance.post("/accounts/withdraw", amount);

			dispatch(withdrawSuccess(response.data));
		} catch (error) {
			const errors = error.response.data.errors;
			if (errors) {
				errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
				dispatch(withdrawFailed(error.response.data));
			}
		}
	};
};

//transfer
export const transferSuccess = (accountNumber, amount) => {
	return { type: TRANSFER_SUCCESS, payload: { accountNumber, amount } };
};

export const transferFailed = () => {
	return {
		type: TRANSFER_FAIL,
	};
};

export const transfer = (accountNumber, amount) => {
	return async (dispatch) => {
		try {
			const response = await axiosInstance.post(
				"/accounts/transfer",
				accountNumber,
				amount
			);

			dispatch(transferSuccess(response.data));
		} catch (error) {
			const errors = error.response.data.errors;
			if (errors) {
				errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
				dispatch(transferFailed(error.response.data));
			}
		}
	};
};

//get balance
export const getBalanceSuccess = (balance) => {
	return { type: GET_BALANCE_SUCCESS, payload: balance };
};

export const getBalanceFailed = () => {
	return {
		type: GET_BALANCE_FAILED,
	};
};

export const getBalance = () => {
	return async (dispatch) => {
		try {
			const response = await axiosInstance.get("/accounts/balance");
			dispatch(getBalanceSuccess(response.data.balance));
		} catch (error) {
			const errors = error.response.data.errors;
			if (errors) {
				errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
				dispatch(getBalanceFailed(error.response.data));
			}
		}
	};
};
