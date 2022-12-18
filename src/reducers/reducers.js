const initialState = {
	data: [],
	loading: true,
	error: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_DATA_REQUEST':
			return {
				data: [],
				loading: true,
				error: false
			};
		case 'FETCH_DATA_SUCCESS':
			return {
				data: action.payload,
				loading: false,
				error: false
			};
		case 'FETCH_DATA_ERROR':
			return {
				data: [],
				loading: false,
				error: action.payload
			};
		default:
			return state;
	};
};

export default reducer;