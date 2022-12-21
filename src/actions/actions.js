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
const onChangeActiveCategory = (id) => {
	return {
		type: 'CHANGE_ACTIVE_CATEGORY',
		payload: id
	};
};
const onAddBookToCart = bookId => {
	return {
		type: 'ADD_BOOK_TO_CART',
		payload: bookId
	};
};
const onReduceTheCountOfTheBook = (bookId) => {
	return {
		type: 'REDUCE_THE_COUNT_OF_THE_BOOK',
		payload: bookId
	};
};
const onIncreaseTheCountOfTheBook = (bookId) => {
	return {
		type: 'INCREASE_THE_COUNT_OF_THE_BOOK',
		payload: bookId
	};
};
const onRemoveTheBookFromTheCart = (bookId) => {
	return {
		type: 'REMOVE_THE_BOOK_FROM_THE_CART',
		payload: bookId
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
	onChangeActiveCategory,
	onAddBookToCart,
	onReduceTheCountOfTheBook,
	onIncreaseTheCountOfTheBook,
	onRemoveTheBookFromTheCart,
	fetchData,
};