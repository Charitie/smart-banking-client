import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logout } from "../../redux/actions/authActions";
import { getBalance } from "../../redux/actions/accountActions";
import profile from "../../assets/profile.jpeg";
import { ReactComponent as CloseMenu } from "../../assets/SVG/cancel-circle.svg";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = ({
	close,
	open,
	logout,
	user: { email, fullname },
	getBalance,
}) => {
	let classes = "mobile-sidebar";
	if (open) {
		classes = "mobile-sidebar open";
	}

	useEffect(() => {
		getBalance();
	}, []);

	return (
		<div className={classes}>
			<div className='mobile__user-info'>
				<div className='top'>
					<h2>Account Profile</h2>
					<CloseMenu onClick={close} className='close-button' />
				</div>
				<div className='mobile__profile-details'>
					<div className='profile'>
						<img src={profile} alt='profile' />
					</div>
					<div className='user-details'>
						<span>{fullname}</span>
						<span>{email}</span>
					</div>
				</div>
			</div>
			<div className='mobile__account-info'>
				<h2 className='home__account-info--title'>Account Information</h2>
				<div className='home__account-info--item'>
					<b>Currency Type:</b> USD
				</div>
				<div className='home__account-info--item'>
					<b>Account Balance:</b> $ 0.00
				</div>
			</div>
			<Link className='link' to='/'>
				<div onClick={logout} className='mobile__logout'>
					Logout
				</div>
			</Link>
		</div>
	);
};

Sidebar.prototype = {
	logout: PropTypes.func,
};

const mapStateToProps = (state) => ({
	user: state.auth.user,
	balance: state.account.balance,
});

export default connect(mapStateToProps, { logout, getBalance })(Sidebar);
