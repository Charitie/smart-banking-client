import React from "react";
import "./Alert.scss";

const Alert = ({ alert }) => {
	return (
		<div key={alert.id} className={`alert alert-${alert.alertType}`}>
			*{alert.message}
		</div>
	);
};

export default Alert;
