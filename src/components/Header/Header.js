import './header.scss';
import './media.scss'
import { connect } from 'react-redux';
import { onChangeActiveCategory } from '../../actions';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = ({ data, activeCategory, onChangeActiveCategory }) => {
	const [hambActive, setHambActive] = useState(false);
	window.onresize = function (event) {
		setHambActive(false);
	};

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
			<Link
				to={`/${category}/`}
				key={id}
				className={linkClasses}
				onClick={() => {
					onChangeActiveCategory(category);
					setHambActive(false)
				}}>
				{category}
			</Link>
		);
	});
	// header__wraper_active
	// 
	let hamburgerClasses;
	let headerWraperClasses;
	let coverClasses;
	if (hambActive) {
		hamburgerClasses = "header__hamburger header__hamburger_active";
		headerWraperClasses = "header__wraper header__wraper_active";
		coverClasses = "header__cover header__cover_active";
	} else {
		hamburgerClasses = "header__hamburger";
		headerWraperClasses = "header__wraper";
		coverClasses = "header__cover";
	}
	return (
		<div className="header">
			<nav className={headerWraperClasses}>
				{result}
			</nav>
			<div
				className={hamburgerClasses}
				onClick={() => setHambActive((r) => !r)}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div
				className={coverClasses}
				onClick={() => setHambActive(false)}></div>
		</div>
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