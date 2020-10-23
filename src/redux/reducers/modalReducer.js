import {
	CLOSE_MODAL,
	OPEN_DEPOSIT_MODAL,
	OPEN_TRANSFER_MODAL,
	OPEN_WITHDRAW_MODAL,
} from "../actions/types";

const initialState = {
	openDeposit: false,
	openWithdraw: false,
	openTransfer: false,
};
export default function (state = initialState, action) {
	switch (action.type) {
		case OPEN_DEPOSIT_MODAL:
			return { ...state, openDeposit: true };
		case OPEN_WITHDRAW_MODAL:
			return { ...state, openWithdraw: true };
		case OPEN_TRANSFER_MODAL:
			return { ...state, openTransfer: true };
		case CLOSE_MODAL:
			return {
				...state,
				openDeposit: false,
				openWithdraw: false,
				openTransfer: false,
			};
		default:
			return state;
	}
}
