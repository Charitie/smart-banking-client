import {
	DEPOSIT_SUCCESS,
	DEPOSIT_FAIL,
	WITHDRAWAL_SUCCESS,
	TRANSFER_SUCCESS,
	WITHDRAWAL_FAIL,
	TRANSFER_FAIL,
	GET_BALANCE_SUCCESS,
} from "../actions/types";

const initialState = {
	loading: true,
	amount: 0,
	accountNumber: "",
	balance: 0,
	error: null,
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case DEPOSIT_SUCCESS:
		case WITHDRAWAL_SUCCESS:
			return {
				...state,
				amount: payload,
				loading: false,
			};
		case TRANSFER_SUCCESS:
			return {
				...state,
				amount: payload,
				accountNumber: payload,
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
			return {
				...state,
				error: payload,
				loading: false,
			};
		default:
			return state;
	}
}
