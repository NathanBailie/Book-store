import './app.scss';
import './media.scss'
import Header from '../Header';
import Main from '../Pages/Main';
import Books from '../Pages/Books';
import Cart from '../Pages/Cart';
import { Routes, Route } from 'react-router-dom';
import { WithStoreService } from '../HOC';


const App = () => {
	return (
		<>
			<Header />
			<div className="app">
				<div className="container">
					<Routes>
						<Route
							// path='/'
							path='/main'
							element={<Main />} />
						<Route
							// path='/bookList'
							path='/'
							element={<Books />} />
						<Route
							path='/cart'
							element={<Cart />} />
					</Routes>
				</div>
			</div>
		</>
	);
};

export default WithStoreService()(App);