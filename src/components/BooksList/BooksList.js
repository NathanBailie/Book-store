import BooksListItem from '../BooksListItem';
import ShoppingCart from '../ShoppingCart';
import Main from '../Main';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';
import { WithStoreService } from '../HOC';
import { fetchData } from '../../actions';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from '../../utils';


const BooksList = ({ data, loading, error, activeCategory, fetchData, }) => {
	useEffect(() => {
		fetchData();
	}, []);

	if (loading) { return <Spinner /> };
	if (error) { return <ErrorIndicator /> };
	if (!loading && !error) {
		if (activeCategory.length > 0) {
			return (
				<>
					<div className="booksList">
						<BooksListItem
							books={activeCategory[0].books}
						/>
					</div>
					<ShoppingCart />
				</>
			);
		} else if (activeCategory.length === 0) {
			return <Main />
		};
	};
};

const mapStateToProps = ({ bookList: { data, loading, error, activeCategory } }) => {
	return { data, loading, error, activeCategory }
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const { storeService } = ownProps;
	return {
		fetchData: fetchData(storeService, dispatch),
	};
};

export default compose(
	WithStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BooksList);