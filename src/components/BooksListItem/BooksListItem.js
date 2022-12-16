import './booksListItem.scss';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const BooksListItem = ({ books }) => {
	const res = books.map(item => {
		const { id, title, author, price, src } = item;
		return (
			<div className="booksListItem__book" key={id}>

			</div>
		)
	})

	return (
		<div className="booksListItem">
			{res}
		</div>
	);
};

export default BooksListItem;