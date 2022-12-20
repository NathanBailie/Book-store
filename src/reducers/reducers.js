const initialState = {
	data: [],
	loading: true,
	error: false,
	booksInCart: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_DATA_REQUEST':
			return {
				...state,
				data: [],
				loading: true,
				error: false,
			};
		case 'FETCH_DATA_SUCCESS':
			return {
				...state,
				data: action.payload,
				loading: false,
				error: false,
			};
		case 'FETCH_DATA_ERROR':
			return {
				...state,
				data: [],
				loading: false,
				error: action.payload,
			};
		case 'CHANGE_ACTIVE_CATEGORY':
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
		case 'ADD_BOOK_TO_CART':
			const bookId = action.payload;
			const { booksInCart } = state;
			let chosenBook;

			for (let item of state.data) {
				for (let book of item.books) {
					if (book.id === bookId) {
						chosenBook = book;
					}
				}
			}
			const { id, title, price } = chosenBook;
			const index = booksInCart.findIndex(item => item.id === id);
			let newBooksInChart;
			if (index === -1) {
				newBooksInChart = [...booksInCart, { id: id, title: title, count: 1, price: price, totalPrice: price, }
				]
			} else if (index > -1) {
				newBooksInChart = [...booksInCart.slice(0, index), ...booksInCart.slice(index + 1)]
			}

			return {
				...state,
				booksInCart: newBooksInChart,

			};
		case 'REDUCE_THE_COUNT_OF_THE_BOOK':
			let result;
			let bookIndex = state.booksInCart.findIndex(book => book.id === action.payload)
			for (let book of state.booksInCart) {
				if (book.id === action.payload) {
					if (book.totalPrice === book.price) {
						result = state.booksInCart.filter(book => book.id !== action.payload);
					} else {
						result = state.booksInCart.map(book => {
							if (book.id === action.payload) {
								return {
									...book,
									['count']: book['count'] - 1,
									['totalPrice']: book['totalPrice'] - book['price'],
								};
							};
						});
					};
				};
			}
			return {
				...state,
				booksInCart: result
			};
		case 'INCREASE_THE_COUNT_OF_THE_BOOK':
			return {
				...state,
				booksInCart: state.booksInCart.map(book => {
					if (book.id === action.payload) {
						return {
							...book,
							['count']: book['count'] + 1,
							['totalPrice']: book['totalPrice'] + book['price'],
						};
					};
					return book;
				})
			};
		case 'REMOVE_THE_BOOK_FROM_THE_CART':
			return {
				...state,
				booksInCart: state.booksInCart.filter(book => book.id !== action.payload),
			};
		default:
			return state;
	};
};

export default reducer;