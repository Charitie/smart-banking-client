import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Alert from "../../../components/Alert/Alert";
import Loader from '../../../assets/loader.gif';

export const Login = ({ isAuthenticated, loading, alerts, login }) => {
	const [formData, setFormData] = useState({ email: "", password: "" });

	const { email, password } = formData;

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		login({ email, password });
	};

	if (isAuthenticated) {
		return <Redirect to='/home' />;
	}

	return (
		<div className='account-container'>
			<form
				onSubmit={handleSubmit}
				className='form form--login'>
				<h2 className='form__title'>Login To Your Account</h2>

				{loading ? <img className='loader' src={Loader} alt="loader" /> : null}

				{alerts.length ? (
					alerts[0].alertType === "login" ? (
						<Alert alert={alerts[0]} />
					) : null
				) : null}

				<div className='form__group'>
					<label className='form__label'>Email</label>
					<input
						className='form__input'
						type='email'
						name='email'
						placeholder='Email'
						value={email}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='form__group'>
					<label className='form__label'>Password</label>
					<input
						className='form__input'
						type='password'
						name='password'
						placeholder='Password'
						value={password}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='form__group'>
					<input className='form__button' type='submit' value='Login' />
					<p>
						Don't have an account.{" "}
						<Link className='form__link' to='/register'>
							Sign up here
						</Link>{" "}
					</p>
				</div>
			</form>
		</div>
	);
};

Login.propTypes = {
	login: PropTypes.func,
	loading: PropTypes.bool,
	alerts: PropTypes.array,
};
