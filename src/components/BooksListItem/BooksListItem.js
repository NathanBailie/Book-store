import './booksListItem.scss';
import './media.scss';
import { connect } from 'react-redux';
import { onAddBookToCart } from '../../actions';
// import cover from './cover.jpg';

const BooksListItem = ({ books, onAddBookToCart, booksInCart }) => {
	if (books.length === 0) {
		return;
	};
	let buttonClasses;
	let buttonTitle;
	const res = books.map(item => {
		const { id, title, author, price, image } = item;
		const inspect = booksInCart.findIndex(item => item.id === id);
		if (inspect !== -1) {
			buttonClasses = "booksListItem__button booksListItem__button_added";
			buttonTitle = "Remove this book from your cart";
		} else {
			buttonClasses = "booksListItem__button";
			buttonTitle = "Add this book to your cart";
		}
		return (
			<div className="booksListItem__book" key={id}>
				<div className="booksListItem__cover">
					<img src={image} alt="cover" />
				</div>
				<div className="booksListItem__descr">
					<h4>{author}</h4>
					<h3>{title}</h3>
					<p>${price}</p>
					<button
						className={buttonClasses}
						title={buttonTitle}
						onClick={() => onAddBookToCart(id)}>
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

const mapStateToProps = ({ shoppingCart: { booksInCart } }) => {
	return { booksInCart }
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onAddBookToCart: (bookId) => dispatch(onAddBookToCart(bookId))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)
	(BooksListItem);