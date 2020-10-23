import React from "react";
import "./Backdrop.scss";

const Backdrop = ({ close, display }) => {


	let showBackdrop = "backdrop";
	if (display) {
		showBackdrop = "display";
	}

	return <div onClick={close} className={showBackdrop}></div>;
};

export default Backdrop;
