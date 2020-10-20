import { axiosInstance } from "../../util/axiosInstance";
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGOUT,
} from "./types";
import { setAlert } from "./alertaction";

//register new user
export const userRegisterSuccess = (user) => {
	return { type: REGISTER_SUCCESS, payload: user };
};

export const userRegisterFailed = (error) => {
	return {
		type: REGISTER_FAIL,
		payload: error,
	};
};

export const register = (user) => {
	return async (dispatch) => {
		try {
			const response = await axiosInstance.post("/users/register", user);

			dispatch(userRegisterSuccess(response.data.user));
		} catch (error) {
			const errors = error.response.data.errors;
			const err = error.response.data.error;

			if (errors) {
				errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
			} else if (err) {
				dispatch(setAlert(err, "danger"));
			}
			dispatch(userRegisterFailed(error.response.data));
		}
	};
};

//Login user
export const userLoginSuccess = (user) => {
	return { type: LOGIN_SUCCESS, payload: user };
};

export const userLoginFailed = (error) => {
	return {
		type: LOGIN_FAIL,
		payload: error,
	};
};

export const login = (user) => async (dispatch) => {
	try {
		const response = await axiosInstance.post("/users/login", user);

		dispatch(userLoginSuccess(response.data));
	} catch (error) {
		const errors = error.response.data.errors;
		const err = error.response.data.error;

		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
		} else if (err) {
			dispatch(setAlert(err, "danger"));
		}	
		dispatch(userLoginFailed(error.response.data));
	}
};

//Logout
export const userLoggedOut = () => ({
	type: LOGOUT,
});

export const logout = () => (dispatch) => {
	dispatch(userLoggedOut());
};
