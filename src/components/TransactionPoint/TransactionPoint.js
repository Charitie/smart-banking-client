import React from "react";
import Deposit from "./Deposit";
import "./TransactionPoint.scss";
import Transfer from "./Transfer";
import Withdrawal from "./Withdrawal";

export const TransactionPoint = ({
	deposit,
	withdraw,
	transfer,
	loading,
	alerts,
}) => {
	return (
		<div className='home__transaction-point'>
			<h2>Transactions</h2>
			<Deposit deposit={deposit} alerts={alerts} loading={loading} />
			<Withdrawal withdraw={withdraw} />
			<Transfer transfer={transfer} />
		</div>
	);
};
