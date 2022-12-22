import uuid from "react-uuid";

export default class StoreService {
	data = [
		{
			category: "JavaScript",
			id: uuid(),
			books: [
				{
					id: uuid(),
					title: "JavaScript for Kids",
					author: "Nick Morgan",
					price: 20,
					image: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51YfamJFhkL._SX376_BO1,204,203,200_.jpg",
				},
				{
					id: uuid(),
					title: "JavaScript: The Definitive Guide",
					author: "David Flanagan",
					price: 21,
					image: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/510JjoNTdOL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
				},
				{
					id: uuid(),
					title: "You Don't Know JS Yet: Get Started",
					author: "Kyle Simpson",
					price: 18,
					image: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/410f-bUBR3L.jpg",
				},
				{
					id: uuid(),
					title: "JavaScript Patterns",
					author: "Stoyan Stefanov ",
					price: 8,
					image: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/511Gt98oEAL.jpg",
				},
			],
		},
		{
			category: "Interfaces",
			id: uuid(),
			books: [
				{
					id: uuid(),
					title: "Non-Designer's Design Book",
					author: "Robin Williams",
					price: 26,
					image: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51ZPzTBa5bL._AC_UY218_.jpg",
				},
				{
					id: uuid(),
					title: "Designing Web Interfaces",
					author: "Bill Scott and Theresa Neil",
					price: 16,
					image: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/812zYk3aYhL._AC_UY218_.jpg",
				},
				{
					id: uuid(),
					title: "Don't Make Me Think",
					author: "Krug Steve",
					price: 16,
					image: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51xzVPaFhfL._SX260_.jpg",
				},
			],
		},
		{
			category: "Algorithms",
			id: uuid(),
			books: [
				{
					id: uuid(),
					title: "Introduction to Algorithms",
					author: "Thomas H. Cormen",
					price: 74,
					image: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41SNoh5ZhOL._SX440_BO1,204,203,200_.jpg",
				},
				{
					id: uuid(),
					title: "Grokking Algorithms",
					author: "Aditya Bhargava",
					price: 35,
					image: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51lIp433IVL._SX397_BO1,204,203,200_.jpg",
				},
				{
					id: uuid(),
					title: "JavaScript Data Structures and Algorithms",
					author: "Sammie Bae",
					price: 13,
					image: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41Ne7uqD6LL.jpg",
				},
			],
		},
		{
			category: "Another",
			id: uuid(),
			books: [
				{
					id: uuid(),
					title: "Clean Code",
					author: "Robert C. Martin",
					price: 31,
					image: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41xShlnTZTL._AC_UY218_.jpg",
				},
				{
					id: uuid(),
					title: "The Art of Readable Code",
					author: "Dustin Boswell and Trevor Foucher",
					price: 37,
					image: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81juM+1k56L._AC_UY218_.jpg",
				},
				{
					id: uuid(),
					title: "Burn Your Portfolio",
					author: "Janda Michael",
					price: 17,
					image: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61u-PGbQNrL.jpg",
				},
				{
					id: uuid(),
					title: "Pragmatic Programmer",
					author: "David Thomas",
					price: 37,
					image: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/518FqJvR9aL.jpg",
				},
			],
		},
	];

	getData() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (Math.random() >= 0.90) {
					reject(new Error('Something has gone wrong!'))
				} else {
					resolve(this.data)
				};
			}, 800);
		});
	};
};