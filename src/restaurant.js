function createRestaurant(name) {
  var restaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
  return restaurant;
}


function addMenuItem(restaurant, itemName) {
  if (restaurant.menus[itemName.type].includes(itemName)) {
    return restaurant.menus
  } else {
  restaurant.menus[itemName.type].push(itemName);
  }
}

function removeMenuItem(restaurant, itemName, menuName) {
  var menuArr = restaurant.menus[menuName];
  if (menuArr.length === 0) {
    return `Sorry, we don't sell ${itemName}, try adding a new recipe!`;
  }
  for (var i = 0; i < menuArr.length; i++) {
    if (menuArr[i].name === itemName) {
      menuArr.splice(i, 1);
      return `No one is eating our ${itemName} - it has been removed from the ${menuName} menu!`;
    } else {
      return `Sorry, we don't sell ${itemName}, try adding a new recipe!`
    }
  }
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
