import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import Landing from "./pages/LandingPage/Landing";
import LoginContainer from "./pages/UserAccounts/LoginPage/Login.container";
import Home from "./pages/HomePage/Home";
import RegistrationContainer from "./pages/UserAccounts/RegistrationPage/Registration.container";
import { PrivateRoute } from "./routes/PrivateRoutes";

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={Landing} />
				<Route path='/register' exact component={RegistrationContainer} />
				<Route path='/login' exact component={LoginContainer} />

				<PrivateRoute path='/home' exact component={Home} />
			</Switch>
		</Router>
	);
}

export default App;
