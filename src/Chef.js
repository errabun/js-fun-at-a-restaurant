class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }
  greetCustomer(customerName, bool) {
    if (customerName && bool) {
      return `Good morning, ${customerName}!`;
    } else {
      return `Hello, ${customerName}!`
    }
  }

  // So close with this function...can't figure out why it's returning undefined
  checkForFood(foodItem) {
    console.log(this.restaurant.menus[foodItem.type]);
    if (this.restaurant.menus[foodItem.type].includes(foodItem.name)) {
      return `Yes, we're serving ${foodItem.name} today!`;
    }
  }
}

module.exports = Chef;
