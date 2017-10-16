var CATS_ARRAY = [
  {
    name: "Boba",
    favouriteFood: "Sock fluff",
    image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"
  },
  {
    name: "Barnaby",
    favouriteFood: "Tuna",
    image: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"
  },
  {
    name: "Max",
    favouriteFood: "Whiskas Temptations",
    image: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"
  },
  { name: "Megatron",
    favouriteFood: "Enchiladas",
    image: "http://img08.deviantart.net/54fc/i/2012/169/0/5/cat_stock_20_by_malleni_stock-d53wyfl.jpg"
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
  console.log("image called: ", image);
}


var collateDocuments = function (cats, catBorder, catName, catFavouriteFood, catImage) {
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
  collateDocuments(catCollection, catBorder, catName, catFavFood, catImage);
}

var makeNewCat = function(){
  var name = CATS_ARRAY[0].name;
  var favouriteFood = CATS_ARRAY[0].favouriteFood;
  var image = CATS_ARRAY[0].image;

  var newCatDetailsList = document.createElement("ul");
  newCatDetailsList.classList.add("cat");

  var nameListItem = document.createElement("li");
  nameListItem.textContent = "Name: " + name;

  var foodListItem = document.createElement("li");
  foodListItem.textContent = "Favourite Food: " + favouriteFood;

  var imageListItem = document.createElement("li");
  var imageItem = document.createElement("img");
  imageItem.src = "http://moderncat.com/sites/default/files/styles/466-wide/public/images/photoentries/photos/wpSpUav.jpg?itok=adE0c33C";
  imageItem.width = 500;
  imageListItem.appendChild(imageItem);

  newCatDetailsList.appendChild(nameListItem);
  newCatDetailsList.appendChild(foodListItem);
  newCatDetailsList.appendChild(imageListItem);
  cats.appendChild(newCatDetailsList);
}


var app = function () {
  for(var cat of CATS_ARRAY){
    addCatListItem(cat.name, cat.favouriteFood, cat.image)
  }
  makeNewCat();
}

window.addEventListener('DOMContentLoaded', app);
