import './shoppingCart.scss';
// import increase from './increase.png'
// import decrease from './decrease.png'

import minus from './minus.png';
import plus from './plus.png';
import remove from './remove.png';

const ShoppingCart = () => {


	return (
		<div className="shoppingCart">
			<div className="shoppingCart__head">
				<span className="shoppingCart__number">#</span>
				<span className="shoppingCart__book">Book</span>
				<span className="shoppingCart__count">Count</span>
				<span className="shoppingCart__price">Price</span>
				<span className="shoppingCart__actions">Actions</span>
			</div>
			<div className="shoppingCart__item">
				<span className="shoppingCart__number">#</span>
				<span className="shoppingCart__book">Book</span>
				<span className="shoppingCart__count">Count</span>
				<span className="shoppingCart__price">Price</span>
				<div className="shoppingCart__actions">
					<div className="shoppingCart__buttons">
						<img className="shoppingCart__decrease"
							src={minus} alt="minus"
							title="Reduce the count of this book" />
						<img className="shoppingCart__increase"
							src={plus} alt="plus"
							title="Increase the count of this book" />
						<img className="shoppingCart__remove" src={remove} alt="remove"
							title="remove this book from the cart" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShoppingCart;