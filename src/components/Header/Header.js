import './header.scss';
import { connect } from 'react-redux';
import { onChangeActiveCategory } from '../../actions';

const Header = ({ data, activeCategory, onChangeActiveCategory }) => {
	const result = data.map((item) => {
		const { category, id } = item;
		const inspect = activeCategory.findIndex(item => item.id === id);
		let linkClasses;
		if (inspect !== -1) {
			linkClasses = "header__link header__link_active";
		} else {
			linkClasses = "header__link";
		}
		return (
			<a
				href="#"
				key={id}
				className={linkClasses}
				onClick={() => {
					onChangeActiveCategory(id)
				}}>
				{category}
			</a>
		);
	});

	return (
		<nav className="header">
			{result}
		</nav>
	);
};

const mapStateToProps = ({ bookList: { data, activeCategory } }) => {
	return { data, activeCategory }
};

const mapDispatchToProps = (dispatch) => {
	return {
		onChangeActiveCategory: (category) => { dispatch(onChangeActiveCategory(category)) }
	};
};

export default connect(mapStateToProps, mapDispatchToProps)
	(Header);