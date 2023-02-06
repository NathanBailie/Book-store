import App from './components/App';
import ErrorBoundary from './components/ErrorBoundary';
import StoreService from './services/StoreService';
import { StoreServiceProvider } from './components/StoreServiceContext';
import store from './store';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

const storeService = new StoreService();


ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	<Provider store={store}>
		<ErrorBoundary>
			<StoreServiceProvider value={storeService}>
				<App />
			</StoreServiceProvider>
		</ErrorBoundary>
	</Provider>
	// </React.StrictMode>
);

