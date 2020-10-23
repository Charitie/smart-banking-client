import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
} from "../actions/types";

const initialState = {
	token: localStorage.getItem("smartbankingtoken"),
	user: JSON.parse( localStorage.getItem("smartbankingUser")),
	isAuthenticated: null,
	loading: true,
};

export default function (state = initialState, action) {
	const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
        localStorage.setItem("smartbankingtoken", payload.token);
       
			localStorage.setItem("smartbankingUser", JSON.stringify({
				email: payload.email,
				fullname: payload.fullname,
			}));
			return {
				...state,
				token: payload.token,
				user: { email: payload.email, fullname: payload.fullname },
				isAuthenticated: true,
				loading: false,
			};
		case REGISTER_FAIL:
		case LOGIN_FAIL:
		case LOGOUT:
			localStorage.removeItem("smartbankingtoken");
			localStorage.removeItem("smartbankingUser");
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
			};
		default:
			return state;
	}
}