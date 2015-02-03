// Models.
var Ingredient = require('../models/ingredient');

// Queries for all ingredients and sends them back to the client.
var sendIngredients = function (res) {
	Ingredient.find()
		.sort({name: 1})
		.exec(function (err, ingredients) {
			res.render("partials/ingredient-list", {
				layout: false,
				ingredients: ingredients
			})
		});
}

var sendOrderIngredients = function (res) {
	Ingredient.find()
		.sort({name: 1})
		.exec(function (err, ingredients) {
			res.render("partials/ingredient-order-list", {
				layout: false,
				ingredients: ingredients
			})
		});
}

var saveIngredient = function (res, newIngredient) {
	newIngredient.save(function (err) {
		if (err) console.log("Error: " + err);
		sendIngredients(res);
	});
}

module.exports = {
	
	getHome: function (req, res){
		res.send("Welcome home!");
	},

	getIngredients: function (req, res){
		
		// Check if the request is AJAX.
		var is_ajax_request = req.xhr;
		if (is_ajax_request) {
			sendIngredients(res);
		} else {
			res.render("ingredients");
		}
	},

	postIngredients: function (req, res){
		
		// Find ingredient. If it doesn't exist, create a new ingredient.
		Ingredient.findOne({_id: req.body.id}, function (err, ingredient){
		  if (err) console.log("Error: " + err);
		  if (ingredient) {
		  	ingredient.name = req.body.name;
	  		ingredient.price = req.body.price;
		  } else {
		  	var ingredient = new Ingredient({
		  		name: req.body.name,
					price: req.body.price,
					instock: "yes"
		  	});
		  }
	  	saveIngredient(res, ingredient);
		});
	},

	toggleIngredient: function (req, res){
		Ingredient.findOne({ _id: req.body.id }, function (err, ingredient){
			if (err) console.log("Error: " + err);
			if (ingredient) {
				ingredient.instock = !ingredient.instock;
				saveIngredient(res, ingredient);
			} 
		});
	},

	getOrder: function (req, res){

		// Check if the request is AJAX.
		var is_ajax_request = req.xhr;
		if (is_ajax_request) {
			sendOrderIngredients(res);
		} else {
			res.render("order-page");
		}
	},

	getKitchen: function (req, res){
		res.send("Welcome to the kitchen!");
	},
}