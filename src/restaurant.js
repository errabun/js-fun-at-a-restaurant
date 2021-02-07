/* The function createRestaurant takes one parameter, name (string);
    Delcares a variable named restaurant and assigns it to an object with two keys, name and menus.
    The key name has a value of the name parameter; the menus key has a value of an object with 3 keys, breakfast, lunch and dinner.
    The value of each key in the menus object is an empty array.
    The function returns the restaurant object.
*/
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

/*  The addMenuItem function takes two parameters, restaurant (object) and itemName (object);
    If the menus object (in the restaurant object) has a key (itemName.type) with a value of itemName (object) in its array value;
      return the menus object from inside the restaurant object.
    Otherwise, if the key within the menus array does not have a value with the itemName object,
      push the itemName object into corresponding array by accessing the key value of type in the itemName object.
*/
function addMenuItem(restaurant, itemName) {
  if (restaurant.menus[itemName.type].includes(itemName)) {
    return restaurant.menus
  } else {
  restaurant.menus[itemName.type].push(itemName);
  }
}


/*  The function removeMenuItem takes 3 parameters, restaurant (object), itemName (string), menuName (string);
    Declare a new variable menuArr and assign it to the value stored in the restaurant object at the key menus with the value of menuName.
    If menuArr's length is 0; return `Sorry, we don't sell ${itemName}, try adding a new recipe!`
    Create for loop to iterate over the length of the menuArr, beginning at the first index and incrementing by 1 index each iteration.
    If the current menuArr has a name key value that is strictly equal to itemName,
      remove that entire object from menuArr using the splice method;
      and return `No one is eating our ${itemName} - it has been removed from the ${menuName} menu!`;
    Otherwise, the itemName is not on any menus so return `Sorry, we don't sell ${itemName}, try adding a new recipe!`
*/
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
