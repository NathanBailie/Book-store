import StoreServiceConsumer from '../StoreServiceContext';


const WithStoreService = () => (Component) => {
	return (props) => {
		return (
			<StoreServiceConsumer>
				{
					(StoreService) => {
						return <Component {...props} StoreService={StoreService} />
					}
				}
			</StoreServiceConsumer>
		);
	};
};

export default WithStoreService;