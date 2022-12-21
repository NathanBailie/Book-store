const updateShoppingCart = (state, action) => {
	if (state === undefined) {
		return {
			booksInCart: [],
		}
	}
	switch (action.type) {
		case 'ADD_BOOK_TO_CART':
			let chosenBook;
			for (let item of state.bookList.data) {
				for (let book of item.books) {
					if (book.id === action.payload) {
						chosenBook = { id: book.id, title: book.title, count: 1, price: book.price, totalPrice: book.price, };
					}
				}
			}
			const inspect = state.shoppingCart.booksInCart.findIndex(book => book.id === action.payload);
			let newBooksInChart;
			if (inspect === -1) {
				newBooksInChart = [...state.shoppingCart.booksInCart, chosenBook];
			} else {
				newBooksInChart = [...state.shoppingCart.booksInCart.slice(0, inspect), ...state.shoppingCart.booksInCart.slice(inspect + 1)];
			}
			return {
				...['shoppingCart'],
				booksInCart: newBooksInChart,
			};
		case 'REDUCE_THE_COUNT_OF_THE_BOOK':
			let result;
			for (let book of state.shoppingCart.booksInCart) {
				if (book.id === action.payload) {
					if (book.totalPrice === book.price) {
						result = state.shoppingCart.booksInCart.filter(book => book.id !== action.payload)
					} else if (book.totalPrice > book.price) {
						result = state.shoppingCart.booksInCart.map(book => {
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
				...['shoppingCart'],
				booksInCart: result

			};
		case 'INCREASE_THE_COUNT_OF_THE_BOOK':
			return {
				...state,
				booksInCart: state.shoppingCart.booksInCart.map(book => {
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
				...['shoppingCart'],
				booksInCart: state.shoppingCart.booksInCart.filter(book => book.id !== action.payload),
			};
		default:
			return state.shoppingCart;
	}
}

export default updateShoppingCart;