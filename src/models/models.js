import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProductsSchema = new Schema({
	name: String,
	description: String,
	category: String,
	price,
	Number,
	created_date: { type: Date, default: Date.now },
});

const Products = mongoose.model('Products', ProductsSchema);

module.exports = Products;
