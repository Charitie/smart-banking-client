import {
	DEPOSIT_SUCCESS,
	DEPOSIT_FAIL,
	WITHDRAWAL_SUCCESS,
	TRANSFER_SUCCESS,
	WITHDRAWAL_FAIL,
	TRANSFER_FAIL,
	GET_BALANCE_SUCCESS,
	CLEAR_ERROR,
	GET_BALANCE_FAILED,
} from "../actions/types";

const initialState = {
	loading: true,
	amount: 0,
	accountNumber: "",
	balance: 0,
	message: "",
	error: {},
};
export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case DEPOSIT_SUCCESS:
		case WITHDRAWAL_SUCCESS:
			return {
				...state,
				amount: payload.amount,
				balance: payload.newBalance,
				message: payload.message,
				loading: false,
			};
		case TRANSFER_SUCCESS:
			return {
				...state,
				amount: payload.amountTransfered,
				balance:payload.balance,
				accountNumber: payload.accountNumber,
				message: payload.message,
				loading: false,
			};
		case GET_BALANCE_SUCCESS:
			return {
				...state,
				balance: payload,
			};
		case DEPOSIT_FAIL:
		case WITHDRAWAL_FAIL:
		case TRANSFER_FAIL:
		case GET_BALANCE_FAILED:
			return {
				...state,
				error: payload,
				loading: false,
			};
		case CLEAR_ERROR:
			return {
				...state,
				error: null,
			};
		default:
			return state;
	}
}
