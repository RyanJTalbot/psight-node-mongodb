import {
	addnewProduct,
	getProducts,
	getProductWithID,
	updateProduct,
	deleteProduct,
} from '../controllers/Controllers';

const routes = (app) => {
	app.route('/products');

	// Post endpoint
	app.post(addnewProduct);

	app.get(getProducts);

	app.route('/products/:ProductID');
	app.get(getProductWithID);
	app.put(updateProduct);

	// app.route('/products/:Product');
	app.delete(deleteProduct);
};

export default routes;
