import { connect } from "react-redux";
import {
	deposit,
	transfer,
	withdraw,
} from "../../redux/actions/accountActions";
import { TransactionPoint } from "./TransactionPoint";

const mapStateToProps = (state, ownProps) => {
	return {
		loading: state.account.loading,
		alerts: state.alert,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		deposit: (amount) => {
			dispatch(deposit(amount));
		},
		withdraw: (amount) => {
			dispatch(withdraw(amount));
		},
		transfer: (amount) => {
			dispatch(transfer(amount));
		},
	};
};

const TransactionPointContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TransactionPoint);

export default TransactionPointContainer;
