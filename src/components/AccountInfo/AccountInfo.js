import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getBalance } from "../../redux/actions/accountActions";
import "./AccountInfo.scss";

const AccountInfo = ({ balance , getBalance}) => {

	useEffect(() => {
		getBalance();
	}, [getBalance]);

	return (
		<div className='home__account-info'>
			<h2 className='home__account-info--title'>Account Information</h2>
			<div className='home__account-info--item'>
				<b>Currency Type:</b> USD
			</div>
			<div className='home__account-info--item'>
				<b>Account Balance:</b> $ {balance}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	balance: state.account.balance,
});

export default connect(mapStateToProps, { getBalance })(AccountInfo);
