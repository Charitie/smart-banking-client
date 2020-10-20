import React, { useState } from "react";
import AccountInfo from "../../components/AccountInfo/AccountInfo";
import Header from "../../components/Navbar/Header";
import LeftCard from "../../components/LeftCard/LeftCard";
import UserInfo from "../../components/UserInfo/UserInfo";
import "./Home.scss";
import Sidebar from "../../components/MobileSidebar/Sidebar";
import Backdrop from "../../components/Backdrop/Backdrop";
import TransactionPointContainer from "../../components/TransactionPoint/TransactionPoint.container";

const Home = () => {
	const [openSidebar, setOpenSidebar] = useState(false);

	const toggleSidebar = () => {
		setOpenSidebar(!openSidebar);
	};
	return (
		<div className='home-container'>
			<Header close={toggleSidebar} />
			{openSidebar && <Backdrop close={toggleSidebar} />}
			<Sidebar open={openSidebar} close={toggleSidebar} />
			<UserInfo />
			<AccountInfo />
			<TransactionPointContainer />
			<LeftCard />
		</div>
	);
};

export default Home;
