module.exports = {
	
	homeRoute: function (req, res){
		res.send("Welcome home!");
	},

	ingredientsRoute: function (req, res){
		res.send("Welcome to ingredients!");
	},

	orderRoute: function (req, res){
		res.send("Welcome to orders!");
	},

	kitchenRoute: function (req, res){
		res.send("Welcome to the kitchen!");
	},

}