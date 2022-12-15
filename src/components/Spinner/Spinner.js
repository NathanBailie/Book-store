import './spinner.scss'
import book from './book.gif';


const Spinner = () => {
	return (
		<div className='spinner'>
			<img src={book} alt="spinner" />
			<p>loading...</p>
		</div>
	)
};

export default Spinner;