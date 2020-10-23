import {
  CLOSE_MODAL,
	OPEN_DEPOSIT_MODAL,
	OPEN_TRANSFER_MODAL,
	OPEN_WITHDRAW_MODAL,
} from "./types";

export const depositModalOpened = (open) => ({
	type: OPEN_DEPOSIT_MODAL,
	payload: open,
});

export const withdrawModalOpened = (open) => ({
	type: OPEN_WITHDRAW_MODAL,
	payload: open,
});

export const transferModalOpened = (open) => ({
	type: OPEN_TRANSFER_MODAL,
	payload: open,
});

export const modalClosed = (open) => ({
	type: CLOSE_MODAL,
	payload: open,
});

export const openDepositModal = () => (dispatch) =>
	dispatch(depositModalOpened({ open: true }));

export const openWithdrawModal = () => (dispatch) =>
	dispatch(withdrawModalOpened({ open: true }));

export const openTransferModal = () => (dispatch) =>
	dispatch(transferModalOpened({ open: true }));

export const closeModal = () => (dispatch) =>
	dispatch(modalClosed({ open: false }));
