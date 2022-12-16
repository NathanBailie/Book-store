import { StoreServiceConsumer } from '../StoreServiceContext';


const WithStoreService = () => (Component) => {
	return (props) => {
		return (
			<StoreServiceConsumer>
				{
					(storeService) => {
						return <Component {...props} storeService={storeService} />
					}
				}
			</StoreServiceConsumer>
		);
	};
};

export default WithStoreService;