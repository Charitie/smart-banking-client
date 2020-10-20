import React from "react";
import profile from "../../assets/profile.jpeg";
import "./UserInfo.scss";
import { connect } from "react-redux";

const UserInfo = ({ user: { email, fullname } }) => {
	return (
		<div className='home__user-info'>
			<h2>Account Profile</h2>
			<div className='profile'>
				<img src={profile} alt='profile' />
			</div>
			<div className='user-details'>
				<span>
					<b>Name: </b> {fullname}
				</span>
				<span>
					<b>Email: </b> {email}
				</span>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	user: state.auth.user,
});

export default connect(mapStateToProps)(UserInfo);
