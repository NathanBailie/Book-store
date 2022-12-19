import './header.scss';
import { connect } from 'react-redux';
import { onChangeActiveCategory, } from '../../actions';

const Header = ({ data, onChangeActiveCategory }) => {
	const result = data.map((item) => {
		const { category, active, id } = item;
		let linkClasses;
		if (active) {
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

const mapStateToProps = ({ data, active }) => {
	return { data, active }
};

const mapDispatchToProps = (dispatch) => {
	return {
		onChangeActiveCategory: (category) => { dispatch(onChangeActiveCategory(category)) }
	};
};

export default connect(mapStateToProps, mapDispatchToProps)
	(Header);