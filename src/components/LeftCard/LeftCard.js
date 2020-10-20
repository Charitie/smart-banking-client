import React from "react";
import card from "../../assets/card.png";
import "./LeftCard.scss";

const LeftCard = () => {
	return (
		<div className='home__card'>
		<img src={card} alt='Atm card' />
		</div>
	);
};

export default LeftCard;
