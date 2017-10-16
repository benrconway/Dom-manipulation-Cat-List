var

var createUnorderedList = function() {
  var newCatDetailsList = document.createElement("ul");
  newCatDetailsList.classList.add("cat");
  return newCatDetailsList;
}

var createNameListItem = function(name) {
  var nameListItem = document.createElement("li");
  nameListItem.textContent = name;
  return nameListItem;
}

var createFoodListItem = function(favouriteFood) {
  var foodListItem = document.createElement("li");
  foodListItem.textContent = "Favourite Food: " + favouriteFood;
}

var createImageListItem = function(image) {
  var imageListItem = document.createElement("li");
  var imageItem = document.createElement("img");
  imageItem.src = image;
  imageItem.width = 500;
  imageListItem.appendChild(imageItem);
  return imageListItem;
}


var addCatListItem(name, favouriteFood, image)


var appendChildren = function (cats, catName, catFavouriteFood, catImage) {

}

var app = function () {
  for(var cat in cats){
    addCatListItem(cat.name, cat.favouriteFood, cat.image)
  }
}

window.addEventListener('DMContentLoaded', app);
