var

var createUnorderedList = function() {
  var newCatDetailsList = 
}

var createNameListItem

var createFoodListItem

var createImageListItem

var appendChildren

var addCatListItem(name, favouriteFood, image)



var app = function () {
  for(var cat in cats){
    addCatListItem(cat.name, cat.favouriteFood, cat.image)
  }
}

window.addEventListener('DMContentLoaded', app);
