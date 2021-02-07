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

function addIngredients(food, ingredients) {
  if (ingredients.includes(food)) {
    return ingredients;
  } else {
    ingredients.push(food);
  }
  return ingredients;
}

function formatPrice(initialPrice) {
  return `$${initialPrice}`
}

function decreasePrice(discountPrice) {
  return discountPrice*.9;
}

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
