import React from "react";
import "./UserInfo.scss";
import { connect } from "react-redux";
import { ReactComponent as UserProfile } from "../../assets/SVG/user.svg";

const UserInfo = ({ user: { email, fullname,accountNumber } }) => {
	console.log(accountNumber)
	return (
		<div className='home__user-info'>
			<h2>Account Profile</h2>
			<div className='profile'>
				<UserProfile className='user-profile' />
			</div>
			<div className='user-details'>
				<span>
					<b>Name: </b> {fullname}
				</span>
				<span>
					<b>Email: </b> {email}
				</span>
				<span>
					<b>Account no: </b> {accountNumber}
				</span>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	user: state.auth.user,
});

export default connect(mapStateToProps)(UserInfo);
