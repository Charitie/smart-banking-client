import { axiosInstance } from "../../util/axiosInstance";
import {
	LOGIN_REQUEST,
	REGISTER_REQUEST,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGOUT,
} from "./types";
import { setAlert } from "./alertaction";

//register new user
export const userRegisterRequest = () => {
	return { type: REGISTER_REQUEST };
};

export const userRegisterSuccess = (user) => {
	return { type: REGISTER_SUCCESS, payload: user };
};

export const userRegisterFailed = (error) => {
	return {
		type: REGISTER_FAIL,
		payload: error,
	};
};

export const register = (user) =>  async (dispatch) => {
		dispatch(userRegisterRequest())
		try {
			const response = await axiosInstance.post("/users/register", user);
			dispatch(userRegisterSuccess(response.data));
		} catch (error) {
			const errors = error.response.data.errors;
			const err = error.response.data.message;

			if (errors) {
				errors.forEach((error) => dispatch(setAlert(error.msg, "register")));
			} else if (err) {
				dispatch(setAlert(err, "register"));
			}
			dispatch(userRegisterFailed(error.response.data));
		}
	};

//Login user
export const userLoginRequest = () => {
	return { type: LOGIN_REQUEST };
};

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
	dispatch(userLoginRequest());
	try {
		const response = await axiosInstance.post("/users/login", user);

		dispatch(userLoginSuccess(response.data));
	} catch (error) {
		const errors = error.response.data.errors;
		const err = error.response.data.message;

		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, "login")));
		} else if (err) {
			dispatch(setAlert(err, "login"));
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
