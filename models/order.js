// Import Ingredient Schema so that ingredients can be embedded in the order.
var IngredientSchema = require('./ingredient').IngredientSchema;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
	personName: String,
	orderItems: [IngredientSchema]
});

module.exports = mongoose.model('order', OrderSchema);