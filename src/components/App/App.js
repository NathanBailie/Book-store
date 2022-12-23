import './app.scss';
import './media.scss'
import Header from '../Header';
import BookList from '../BooksList';
import { WithStoreService } from '../HOC';


const App = () => {
	return (
		<div className="app">
			<Header />
			<div className="container">
				<BookList />
			</div>
		</div>
	);
};

export default WithStoreService()(App);