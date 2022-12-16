import App from './components/App';
import ErrorBoundary from './components/ErrorBoundary';
import StoreService from './services/StoreService';
import { StoreServiceProvider } from './components/StoreServiceContext';
import store from './store';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

const storeService = new StoreService();


ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	<Provider store={store}>
		<ErrorBoundary>
			<StoreServiceProvider value={storeService}>
				<Router>
					<App />
				</Router>
			</StoreServiceProvider>
		</ErrorBoundary>
	</Provider>
	// </React.StrictMode>
);

