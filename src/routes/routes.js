import {
	addnewProduct,
	getProducts,
	getProductWithID,
} from '../controllers/Controllers';

const routes = (app) => {
	app.route('/products');

	// Post endpoint
	app.post(addnewProduct);

	app.get(getProducts);

	app.route('/products/:ProductID');
	app.get(getProductWithID);
};

export default routes;
