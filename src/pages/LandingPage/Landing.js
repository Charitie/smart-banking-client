import React from "react";
import { Link } from "react-router-dom";

import card from "../../assets/card.png";
import "./Landing.scss";

const Landing = () => {
	return (
		<div className='landing-container'>
			<div className='landing__card'>
				<img src={card} alt='card' />
			</div>
			<div className='landing__intro'>
				<h1 className='landing__intro--title'>Smart Banking Service</h1>
				<p className='landing__intro--text'>
				Manage your money	flow with a smart and simple  Transaction Prossessing System.
				</p>
				<Link to='/login' className='btn btn-cta'>Start Now</Link>
			</div>
		</div>
	);
};

export default Landing;
