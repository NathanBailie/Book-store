const initialState = {
	data: [],
	loading: true,
	error: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'DATA_REQUESTED':
			return {
				data: [],
				loading: true,
				error: false
			};
		case 'DATA_LOADED':
			return {
				data: action.payload,
				loading: false,
				error: false
			};
		case 'DATA_ERROR':
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