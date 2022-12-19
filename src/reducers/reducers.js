const initialState = {
	data: [],
	active: [],
	loading: true,
	error: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_DATA_REQUEST':
			return {
				data: [],
				active: [],
				loading: true,
				error: false,
			};
		case 'FETCH_DATA_SUCCESS':
			return {
				data: action.payload,
				loading: false,
				error: false,
				active: [],
			};
		case 'FETCH_DATA_ERROR':
			return {
				data: [],
				loading: false,
				error: action.payload,
				active: [],
			};
		case 'ON_CHANGE_ACTIVE_CATEGORY':
			return {
				...state,
				data: state.data.map(item => {
					if (item.id === action.payload) {
						return { ...item, ['active']: true };
					} else {
						return { ...item, ['active']: false };
					};
				}),
			};
		default:
			return state;
	};
};

export default reducer;