import './app.scss';
import './media.scss'
import Header from '../Header';
import BookList from '../BooksList';
import { Routes, Route } from 'react-router-dom';
import { WithStoreService } from '../HOC';


const App = () => {
	return (
		<>
			<div className="app">
				<Header />
				<div className="container">
					<Routes>
						<Route
							path='/'
							element={<BookList />} />
						<Route
							path='/JavaScript'
							element={<BookList category="JavaScript" />} />
						<Route
							path='/Interfaces'
							element={<BookList category="Interfaces" />} />
						<Route
							path='/Algorithms'
							element={<BookList category="Algorithms" />} />
						<Route
							path='/Another'
							element={<BookList category="Another" />} />
					</Routes>
				</div>
			</div>
		</>
	);
};

export default WithStoreService()(App);