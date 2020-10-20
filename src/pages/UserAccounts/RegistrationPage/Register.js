import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { Form } from "semantic-ui-react";
import Alert from "../../../components/Alert/Alert";

export const Register = ({
	alerts,
	register,
	isAuthenticated,
	loading,
}) => {
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

	const handleSubmit = (event) => {
		event.preventDefault();
		register({ fullname, email, phone, password });
	};

	if (isAuthenticated) {
		return <Redirect to='/home' />;
	}

	return (
		<div className='account-container'>
			<Form
				onSubmit={handleSubmit}
				loading={loading}
				className='form form--register'>
				<h2 className='form__title'>Create Your Account</h2>
				{alerts !== null && alerts.length ? <Alert alert={alerts[0]} /> : null}
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
					<label className='form__label'>Phone Number</label>
					<input
						className='form__input'
						type='text'
						name='phone'
						placeholder='Phone Number'
						value={phone}
						onChange={handleChange}
						minLength={10}
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
			</Form>
		</div>
	);
};

Register.propTypes = {
	register: PropTypes.func,
	loading: PropTypes.bool,
	alerts: PropTypes.array,
};
