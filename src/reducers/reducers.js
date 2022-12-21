const initialState = {
	data: [],
	loading: true,
	error: false,
	activeCategory: [],
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
				booksInCart: [],
			};
		case 'FETCH_DATA_SUCCESS':
			return {
				...state,
				data: action.payload,
				loading: false,
				error: false,
				booksInCart: [],
			};
		case 'FETCH_DATA_ERROR':
			return {
				...state,
				data: [],
				loading: false,
				error: action.payload,
				booksInCart: [],
			};
		case 'CHANGE_ACTIVE_CATEGORY':
			return {
				...state,
				activeCategory: state.data.filter(item => item.id === action.payload),
			};
		case 'ADD_BOOK_TO_CART':
			let chosenBook;
			for (let item of state.data) {
				for (let book of item.books) {
					if (book.id === action.payload) {
						chosenBook = { id: book.id, title: book.title, count: 1, price: book.price, totalPrice: book.price, };
					}
				}
			}
			const inspect = state.booksInCart.findIndex(book => book.id === action.payload);
			let newBooksInChart;
			if (inspect === -1) {
				newBooksInChart = [...state.booksInCart, chosenBook];
			} else {
				newBooksInChart = [...state.booksInCart.slice(0, inspect), ...state.booksInCart.slice(inspect + 1)];
			}
			return {
				...state,
				booksInCart: newBooksInChart,
			};
		case 'REDUCE_THE_COUNT_OF_THE_BOOK':
			let result;
			for (let book of state.booksInCart) {
				if (book.id === action.payload) {
					if (book.totalPrice === book.price) {
						result = state.booksInCart.filter(book => book.id !== action.payload)
					} else if (book.totalPrice > book.price) {
						result = state.booksInCart.map(book => {
							if (book.id === action.payload) {
								return {
									...book,
									['count']: book['count'] - 1,
									['totalPrice']: book['totalPrice'] - book['price']
								}
							} else {
								return book;
							}
						})
					}
				}
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