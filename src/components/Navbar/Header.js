import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { ReactComponent as CloseMenu } from "../../assets/SVG/menu.svg";
import { logout } from "../../redux/actions/authActions";
import "./Header.scss";

const Header = ({ close, logout }) => {
	return (
		<div className='home__header'>
			<CloseMenu onClick={close} className='close-button' />
			<div className='home__header--title'>Smart Banking</div>
			<Link className='link' to='/'>
				<div onClick={logout} className='home__header--logout'>
					Logout
				</div>
			</Link>
		</div>
	);
};

Header.prototype = {
	logout: PropTypes.func,
};

export default connect(null, { logout })(Header);
