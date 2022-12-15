import './errorBoundary.scss';
import ErrorIndicator from '../ErrorIndicator';
import { useState, useEffect } from 'react';

const ErrorBoundary = (props) => {
	const [error, setError] = useState(false);

	useEffect(() => {
		setError(true);
	}, []);


	return (
		error ? <ErrorIndicator /> : props.children
	);
};

export default ErrorBoundary;