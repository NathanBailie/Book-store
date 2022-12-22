import './shoppingCart.scss';
import './media.scss';
import minus from './minus.png';
import plus from './plus.png';
import remove from './remove.png';
import { connect } from 'react-redux';
import { onReduceTheCountOfTheBook, onIncreaseTheCountOfTheBook, onRemoveTheBookFromTheCart } from '../../actions';


const ShoppingCart = ({ booksInCart, onReduceTheCountOfTheBook, onIncreaseTheCountOfTheBook, onRemoveTheBookFromTheCart }) => {
	if (booksInCart.length === 0) {
		return;
	};
	let fullOrder = booksInCart.reduce((sum, elem) => sum + elem.totalPrice, 0);

	const result = booksInCart.map((book, index) => {
		const { id, title, count, totalPrice } = book;
		return (
			<div className="shoppingCart__item">
				<span className="shoppingCart__number">{index + 1}</span>
				<span className="shoppingCart__book">{title}</span>
				<span className="shoppingCart__count">{count}</span>
				<span className="shoppingCart__price">${totalPrice}</span>
				<div className="shoppingCart__actions">
					<div className="shoppingCart__buttons">
						<img
							className="shoppingCart__decrease"
							src={minus} alt="minus"
							title="Reduce the count of this book"
							onClick={() => onReduceTheCountOfTheBook(id)} />
						<img className="shoppingCart__increase"
							src={plus} alt="plus"
							title="Increase the count of this book"
							onClick={() => onIncreaseTheCountOfTheBook(id)} />
						<img
							className="shoppingCart__remove" src={remove} alt="remove"
							title="Remove this book from the cart"
							onClick={() => onRemoveTheBookFromTheCart(id)} />
					</div>
				</div>
			</div>
		);
	});

	return (
		<div className="shoppingCart">
			<div className="shoppingCart__head">
				<span className="shoppingCart__number">#</span>
				<span className="shoppingCart__book">Book</span>
				<span className="shoppingCart__count">Count</span>
				<span className="shoppingCart__price">Price</span>
				<span className="shoppingCart__actions">Actions</span>
			</div>
			{result}
			<div className="shoppingCart__totalPrice">
				Total: <span>${fullOrder}</span>
			</div>
		</div>
	);
};

const mapStateToProps = ({ shoppingCart: { booksInCart } }) => {
	return { booksInCart };
};

const mapDispatchToProps = {
	onIncreaseTheCountOfTheBook: onIncreaseTheCountOfTheBook,
	onReduceTheCountOfTheBook: onReduceTheCountOfTheBook,
	onRemoveTheBookFromTheCart: onRemoveTheBookFromTheCart,
};

export default connect(mapStateToProps, mapDispatchToProps)
	(ShoppingCart);