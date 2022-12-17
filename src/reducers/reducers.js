import uuid from "react-uuid";

const initialState = [
	{
		category: "JavaScript", active: true,
		books: [
			{
				id: uuid(),
				title: "JavaScript for Kids",
				author: "Nick Morgan",
				price: 20,
				src: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51YfamJFhkL._SX376_BO1,204,203,200_.jpg",
				added: false,
			},
			{
				id: uuid(),
				title: "JavaScript: The Definitive Guide",
				author: "David Flanagan",
				price: 21,
				src: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/510JjoNTdOL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
				added: false,
			}
		],
	},
]

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'BOOKS_LOADED':
			state = action.payload;
		default:
			return state;
	};
};

export default reducer;