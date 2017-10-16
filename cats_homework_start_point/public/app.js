var catInputArray = [
  { name: "Megatron",
    favouriteFood: "Enchiladas",
    image: "http://moderncat.com/sites/default/files/styles/466-wide/public/images/photoentries/photos/wpSpUav.jpg?itok=adE0c33C"
  }
]

var createUnorderedList = function() {
  var newCatDetailsList = document.createElement("ul");
  newCatDetailsList.classList.add("cat");
  return newCatDetailsList;
}

var createNameListItem = function(name) {
  var nameListItem = document.createElement("li");
  nameListItem.textContent = "Name: " + name;
  return nameListItem;
}

var createFoodListItem = function(favouriteFood) {
  var foodListItem = document.createElement("li");
  foodListItem.textContent = "Favourite Food: " + favouriteFood;
  return foodListItem
}

var createImageListItem = function(image) {
  var imageListItem = document.createElement("li");
  var imageItem = document.createElement("img");
  imageItem.src = image;
  imageItem.width = 500;
  imageListItem.appendChild(imageItem);
  return imageListItem;
}


var appendChildren = function (cats, catBorder, catName, catFavouriteFood, catImage) {
  catBorder.appendChild(catName);
  catBorder.appendChild(catFavouriteFood);
  catBorder.appendChild(catImage);
  cats.appendChild(catBorder);
}

var addCatListItem = function(name, favouriteFood, image) {
  var catBorder = createUnorderedList();
  var catName = createNameListItem(name);
  var catFavFood = createFoodListItem(favouriteFood);
  var catImage = createImageListItem(image);
  var catCollection = document.querySelector("section#cats")
  appendChildren(catCollection, catBorder, catName, catFavFood, catImage)
}

// var makeNewCat = function(){
//   var name = "Megatron";
//   var favouriteFood = "Enchiladas"
//   var image = "http://moderncat.com/sites/default/files/styles/466-wide/public/images/photoentries/photos/wpSpUav.jpg?itok=adE0c33C"
//
//   var newCatDetailsList = document.createElement("ul");
//   newCatDetailsList.classList.add("cat");
//
//   var nameListItem = document.createElement("li");
//   nameListItem.textContent = "Name: " + name;
//
//   var foodListItem = document.createElement("li");
//   foodListItem.textContent = "Favourite Food: " + favouriteFood;
//
//   var imageListItem = document.createElement("li");
//   var imageItem = document.createElement("img");
//   imageItem.src = "http://moderncat.com/sites/default/files/styles/466-wide/public/images/photoentries/photos/wpSpUav.jpg?itok=adE0c33C";
//   imageItem.width = 500;
//
//   newCatDetailsList.appendChild(nameListItem);
//   newCatDetailsList.appendChild(foodListItem);
//   newCatDetailsList.appendChild(imageListItem);
//   cats.appendChild(newCatDetailsList);
// }


var app = function () {
  for(var cat in catInputArray){
    addCatListItem(cat.name, cat.favouriteFood, cat.image)
    console.dir(catInputArray);

}

window.addEventListener('DOMContentLoaded', app);
