import './booksListItem.scss';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import cover from './cover.jpg';

const BooksListItem = ({ books }) => {
	let buttonClasses;
	let buttonTitle;
	const res = books.map(item => {
		const { id, title, author, price, src, added } = item;
		if (added) {
			buttonClasses = "booksListItem__button booksListItem__button_added";
			buttonTitle = "Remove this book from your cart";
		} else {
			buttonClasses = "booksListItem__button";
			buttonTitle = "Add this book to your cart";
		}
		return (
			<div className="booksListItem__book" key={id}>
				<div className="booksListItem__cover">
					<img src={cover} alt="cover" />
				</div>
				<div className="booksListItem__descr">
					<h4>{author}</h4>
					<h3>{title}</h3>
					<p>${price}</p>
					<button
						className={buttonClasses}
						title={buttonTitle}>
						<span></span>
						<span></span>
					</button>
				</div>
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