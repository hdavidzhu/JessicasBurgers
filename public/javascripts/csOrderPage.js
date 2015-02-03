var onSuccess = function(data, status) {
  $("#ingredient_list").html(data);
};

var onError = function(data, status) {
  $("#ingredient_list").html("Error world!");
};

$(function() {
  $.get("order").done(onSuccess).error(onError);
});