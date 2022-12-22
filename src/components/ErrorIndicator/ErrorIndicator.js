import './errorIndicator.scss';
import error from './error.jpg';

const ErrorIndicator = () => {


	return (
		<div className="errorIndicator">
			<img src={error} alt="error" />
			<h4>Ohh.. Something went wrong!</h4>
			<p>Please, reload your page!</p>
		</div>
	);
};

export default ErrorIndicator;