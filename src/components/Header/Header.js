import './header.scss';
// import { WithStoreService } from '../HOC';
import { useState } from 'react';

const Header = () => {
	const allLinks = [
		{ name: "JavaScript", active: false },
		{ name: "Interfaces", active: false },
		{ name: "Another", active: false },
	];

	const [links, setLinks] = useState(allLinks);

	function onChangeProp(id) {
		const newLinks = links.map((link, index) => {
			if (id === index) {
				return { ...link, ['active']: true };
			}
			return { ...link, ['active']: false }
		});
		setLinks(newLinks);
	};

	const result = links.map((link, index) => {
		let linkClasses;
		if (link.active) {
			linkClasses = "header__link header__link_active";
		} else {
			linkClasses = "header__link";
		}
		return (
			<a
				href="#"
				key={index}
				className={linkClasses}
				onClick={() => onChangeProp(index)}>
				{link.name}
			</a>
		);
	});

	return (
		<nav className="header">
			{result}
		</nav>
	);
};

export default Header;