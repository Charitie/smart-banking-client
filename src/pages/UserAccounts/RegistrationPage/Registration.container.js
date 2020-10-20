import { connect } from "react-redux";
import { Register } from "./Register";
import { register } from "../../../redux/actions/authActions";

const mapStateToProps = (state, ownProps) => {
	return {
		loading: state.auth.loading,
		isAuthenticated: state.auth.isAuthenticated,
		alerts: state.alert,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		register: (user) => {
			dispatch(register(user));
		},
	};
};

const RegistrationContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Register);

export default RegistrationContainer;
