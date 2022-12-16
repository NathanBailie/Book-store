import './booksList.scss';
import BooksListItem from '../BooksListItem';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const BooksList = ({ data }) => {
	if (data.length === 0) {
		return;
	};

	const item = data.filter(item => item.active === true);
	const [{ books }] = item;

	return (
		<div className="booksList">
			<BooksListItem books={books} />
		</div>
	);
};


const mapStateToProps = (state) => {
	return {
		data: state
	};
};

export default connect(mapStateToProps)(BooksList);