import React from "react";

export const renderError = (error, errorType) => {
	if (error) {
		if (error.type === errorType) {
			return <p className='error'>*{error.message}</p>;
		}
		return null;
	}
	return null;
};
