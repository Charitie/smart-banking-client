import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import Alert from "../../../components/Alert/Alert";
import Loader from '../../../assets/loader.gif';

export const Register = ({ alerts, register, isAuthenticated, loading }) => {
	const [formData, setFormData] = useState({
		fullname: "",
		email: "",
		phone: "",
		password: "",
	});

	const { fullname, email, phone, password } = formData;

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	let errorphone;
	const handleSubmit = (event) => {
		event.preventDefault();

		register({ fullname, email, phone, password });
	};

	if (isAuthenticated) {
		return <Redirect to='/home' />;
	}

	return (
		<div className='account-container'>
			<form
				onSubmit={handleSubmit}
				className='form form--register'>
				<h2 className='form__title'>Create Your Account</h2>

				{loading ? <img className='loader' src={Loader} alt="loader" /> : null}

				{alerts.length ? (
					alerts[0].alertType === "register" ? (
						<Alert alert={alerts[0]} />
					) : null
				) : null}

				<div className='form__group'>
					<label className='form__label'>Full Name</label>
					<input
						className='form__input'
						type='text'
						name='fullname'
						placeholder='Full Name'
						value={fullname}
						onChange={handleChange}
						required
					/>
				</div>
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
					{errorphone}
					<label className='form__label'>Phone Number</label>
					<input
						className='form__input'
						type='text'
						pattern='^\+?([0-9]{3})\)?([0-9]{9})$'
						name='phone'
						placeholder='+254*********'
						value={phone}
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
						minLength={6}
						required
					/>
				</div>
				<div className='form__group'>
					<input className='form__button' type='submit' value='Sign Up' />
					<p>
						Already have an account.
						<Link className='form__link' to='/login'>
							Login here
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
};

Register.propTypes = {
	register: PropTypes.func,
	loading: PropTypes.bool,
	alerts: PropTypes.array,
};
