import { addnewProduct } from '../controllers/Controllers';

const routes = (app) => {
	app.route('/products');

	// Post endpoint
	app.post(addnewProduct);
};

export default routes;
