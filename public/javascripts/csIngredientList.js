var onSuccess = function(data, status) {
  $("#ingredient_list").html(data);
};

var onError = function(data, status) {
  $("#ingredient_list").html("Error world!");
};

$(".toggle-stock").click(function(event){
  var idClicked = $(event.target).attr('class').split(/\s+/)[1];

  event.preventDefault();
  $.post("toggle-ingredient", {
  	id: idClicked	
  })
  	.done(onSuccess)
  	.error(onError);
});

function getEdits(itemName, itemPrice) {
  var newName = prompt('Please enter your new name', itemName);
  var newPrice = prompt('Please enter your new price', itemPrice);

  if (name != null && name != "") {
      alert(name);
  }
  return [newName, newPrice];
}

$(".edit-ingredient").click(function(event){
	var classes = $(event.target).attr('class').split(/\s+/);
	var idClicked = classes[1];
	var itemName = classes [2];
	var itemPrice = classes [3];

	var editedInfo = getEdits(itemName, itemPrice);
	var newName = editedInfo[0];
	var newPrice = editedInfo[1];

  event.preventDefault();
  $.post("ingredients", {
  	id: idClicked,
  	name: newName,
  	price: newPrice  		
  })
  	.done(onSuccess)
  	.error(onError);
});