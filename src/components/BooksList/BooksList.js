import './booksList.scss';
import BooksListItem from '../BooksListItem';
import ShoppingCart from '../ShoppingCart';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';
import { WithStoreService } from '../HOC';
import { fetchData } from '../../actions';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from '../../utils';


const BooksList = ({ data, loading, error, fetchData }) => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		fetchData()
	}, []);

	useEffect(() => {
		if (data.length > 0) {
			const activeItem = data.filter(item => item.active === true);
			if (activeItem.length > 0) {
				const [{ books }] = activeItem;
				setBooks(books);
			};
		};
	}, [data]);


	if (loading) {
		return <Spinner />;
	};
	if (error) {
		return <ErrorIndicator />;
	};
	if (!loading && !error) {
		return (
			<>
				<div className="booksList">
					<BooksListItem
						books={books} />
				</div>
				<ShoppingCart />
			</>
		);
	};
};

const mapStateToProps = ({ data, loading, error }) => {
	return { data, loading, error }
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const { storeService } = ownProps;
	return {
		fetchData: fetchData(storeService, dispatch)
	};
};

export default compose(
	WithStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BooksList);