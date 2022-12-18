const dataRequested = () => {
	return {
		type: 'DATA_REQUESTED'
	};
};
const dataLoaded = (newData) => {
	return {
		type: 'DATA_LOADED',
		payload: newData
	};
};
const dataError = (error) => {
	return {
		type: 'DATA_ERROR',
		payload: error
	};
};

export {
	dataLoaded,
	dataRequested,
	dataError
};