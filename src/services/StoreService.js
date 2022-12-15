import uuid from "react-uuid";

export default class StoreService {
	data = [
		{
			category: "JavaScript", active: false,
			books: [
				{
					id: uuid(),
					title: "JavaScript for Kids",
					author: "Nick Morgan",
					price: 20,
					image: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51YfamJFhkL._SX376_BO1,204,203,200_.jpg"
				},
				{
					id: uuid(),
					title: "JavaScript: The Definitive Guide",
					author: "David Flanagan",
					price: 21,
					coverImage: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/510JjoNTdOL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
				}
			],
		},
		{
			category: "Interfaces", active: false,
			books: [
				{
					id: uuid(),
					title: "Non-Designer's Design Book",
					author: "Robin Williams",
					price: 26,
					image: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51ZPzTBa5bL._AC_UY218_.jpg"
				},
				{
					id: uuid(),
					title: "Designing Web Interfaces",
					author: " Bill Scott and Theresa Neil",
					price: 16,
					coverImage: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/812zYk3aYhL._AC_UY218_.jpg"
				}
			],
		},
		{
			category: "Another", active: false,
			books: [
				{
					id: uuid(),
					title: "Clean Code",
					author: "Robert C. Martin",
					price: 31,
					image: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41xShlnTZTL._AC_UY218_.jpg"
				},
				{
					id: uuid(),
					title: "The Art of Readable Code",
					author: " Dustin Boswell and Trevor Foucher",
					price: 37,
					coverImage: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81juM+1k56L._AC_UY218_.jpg"
				}
			],
		},
	];

	getData() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (Math.random() > 0.80) {
					reject(new Error('Something has gone wrong!'))
				} else {
					resolve(this.data)
				};
			}, 800);
		});
	};
};