const dataRequested = () => {
	return {
		type: 'FETCH_DATA_REQUEST'
	};
};
const dataLoaded = (newData) => {
	return {
		type: 'FETCH_DATA_SUCCESS',
		payload: newData
	};
};
const dataError = (error) => {
	return {
		type: 'FETCH_DATA_ERROR',
		payload: error
	};
};

const fetchData = (storeService, dispatch) => () => {
	dispatch(dataRequested());
	storeService
		.getData()
		.then((response) => { dispatch(dataLoaded(response)) })
		.catch((error) => dispatch(dataError(error)))
}

export {
	fetchData
};