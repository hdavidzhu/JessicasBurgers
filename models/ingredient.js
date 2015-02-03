var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IngredientSchema = new Schema({
	name: String,
	price: Number,
	instock: Boolean
});

module.exports = mongoose.model('ingredient', IngredientSchema);