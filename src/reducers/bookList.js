const updateBookList = (state, action) => {
	if (state === undefined) {
		return {
			data: [],
			loading: true,
			error: false,
			activeCategory: [],
		};
	};
	switch (action.type) {
		case 'FETCH_DATA_REQUEST':
			return {
				data: [],
				loading: true,
				error: false,
				activeCategory: [],
			};
		case 'FETCH_DATA_SUCCESS':
			return {
				data: action.payload,
				loading: false,
				error: false,
				activeCategory: [],
			};
		case 'FETCH_DATA_ERROR':
			return {
				data: [],
				loading: false,
				error: action.payload,
				activeCategory: [],
			};
		case 'CHANGE_ACTIVE_CATEGORY':
			let c = state['bookList'].data.filter(item => item.category === action.payload);
			return {
				...state['bookList'],
				activeCategory: state['bookList'].data.filter(item => item.id === action.payload),

			};
		default:
			return state.bookList;
	};
};

export default updateBookList;