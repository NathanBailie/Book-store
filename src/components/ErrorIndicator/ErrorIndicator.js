import './errorIndicator.scss';
import error from './error.jpg';

const ErrorIndicator = () => {


	return (
		<div className="errorIndicator">
			<img src={error} alt="error" />
			<p>Something went wrong!</p>
		</div>
	);
};

export default ErrorIndicator;