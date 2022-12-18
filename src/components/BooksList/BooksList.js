import './booksList.scss';
import BooksListItem from '../BooksListItem';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';
import { WithStoreService } from '../HOC';
import { dataLoaded, dataRequested, dataError } from '../../actions';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from '../../utils';


const BooksList = ({ storeService, dataLoaded, dataRequested, dataError, data, loading, error }) => {
	const [books, setBooks] = useState();

	useEffect(() => {
		dataRequested();
		storeService
			.getData()
			.then((response) => {
				dataLoaded(response)
			})
			.catch((error) => dataError(error))
	}, []);

	useEffect(() => {
		if (data.length > 0) {
			const activeItem = data.filter(item => item.active === true);
			const [{ books }] = activeItem;
			setBooks(books);
		}
	}, [data]);


	if (loading) {
		return <Spinner />;
	};
	if (error) {
		return <ErrorIndicator />;
	};
	if (!loading && !error) {
		return <div className="booksList">
			<BooksListItem books={books} />
		</div>;
	}
};


const mapStateToProps = ({ data, loading, error }) => {
	return { data, loading, error }
};

const mapDispatchToProps = { dataLoaded, dataRequested, dataError };

export default compose(
	WithStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BooksList);