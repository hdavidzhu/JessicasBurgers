var $postIngredient = $("#post_ingredient");

var onSuccess = function(data, status) {
  $("#ingredient_list").html(data);
};

var onError = function(data, status) {
  $("#ingredient_list").html("Error world!");
};

$(function() {
  $.get("ingredients").done(onSuccess).error(onError);
});

$postIngredient.submit(function(event) {
  event.preventDefault();

  if($("#input-name").val() === "" || $.isNumeric($("#input-price").val()) === false) {
    alert("Ingredient not valid! Please complete description.");
  } else {
    var name = $postIngredient.find("[name='name']").val();
    var price = $postIngredient.find("[name='price']").val();
    $.post("ingredients", {
      name: name,
      price: price,
      instock: true
    }).done(onSuccess).error(onError);
  }  
});