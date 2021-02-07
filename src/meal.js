function nameMenuItem(food) {
  return `Delicious ${food}`;
}

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type,
  }
}


/* The function addIngredients takes two parameters, a food string and an ingredients array;
    If the array ingredients includes the food string,
      return the ingredients array;
    Otherwise, if the ingredients array does not include the food string,
      push the food string into the ingredients array, then return the ingredients array;
*/
function addIngredients(food, ingredients) {
  if (ingredients.includes(food)) {
    return ingredients;
  } else {
    ingredients.push(food);
  }
  return ingredients;
}

// The formatPrice function takes one parameter (initialPrice), an integer.
  // return parameter (initialPrice) with a dollar sign in front of parameter value
function formatPrice(initialPrice) {
  return `$${initialPrice}`
}

// The decreasePrice function takes one parameter (discountPrice), an integer.
  // and returns the discountPrice parameter minus 10%
function decreasePrice(discountPrice) {
  return discountPrice*.9;
}


/*  The createRecipe function takes 3 parameters, a title (string), ingredients (array), menuItemType (string);
    and returns an object named recipe with 3 key value pairs.
    Each value for the keys will be passed as an argument when function is invoked.
    Then the function returns the recipe object. 
*/
function createRecipe(title, ingredients, menuItemType) {
  recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  }
  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
