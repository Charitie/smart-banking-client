import axios from "axios";

const baseURL = "https://smart-banking-system.herokuapp.com";

// const baseURL = "http://localhost:8080";

export const axiosInstance = axios.create({
	baseURL,
	headers: { "Content-Type": "application/json", crossDomain: true },
});

axiosInstance.interceptors.request.use((config) => {
	const accessToken = localStorage.getItem("smartbankingtoken");
	if (accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}
	return config;
});
