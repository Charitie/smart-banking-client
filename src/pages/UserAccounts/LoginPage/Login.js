import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Form } from "semantic-ui-react";
import Alert from "../../../components/Alert/Alert";

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
			<Form
				onSubmit={handleSubmit}
				loading={loading}
				className='form form--login'>
				<h2 className='form__title'>Login To Your Account</h2>
				{alerts.length ? <Alert alert={alerts[0]} /> : null}
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
			</Form>
		</div>
	);
};

Login.propTypes = {
	login: PropTypes.func,
	loading: PropTypes.bool,
	alerts: PropTypes.array,
};
