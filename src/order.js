/*  The function takeOrder takes two parameters, orderNum (object) & deliveryArray (array);
    If the array, deliveryArray, length is less than 3,
      push the orderNum object into the deliveryArray and return;
    Otherwise, if the length of deliveryArray is 3 or more
      return the deliveryArray. (Length of deliveryArray can only be 3 or less)
*/
function takeOrder(orderNum, deliveryArray) {
  if (deliveryArray.length < 3) {
    return deliveryArray.push(orderNum);
  } else {
    return deliveryArray;
  }
}


/* The function refundOrder takes two parameters, orderNumber (integer) and deliveryArray (array);
    Splice the orderNum object at the index with the key value of orderNumber minus 1;
    return the deliveryArray of order objects;
*/
function refundOrder(orderNumber, deliveryArray) {
  deliveryArray.splice(orderNumber - 1, 1);
  return deliveryArray;
}


/* The function listItems takes one parameter, deliveryArray (array of objects);
    Declare a variable named items and assign it to an empty array;
    Using a for loop, iterate over every object in the deliveryArray, beginning at index 0, incrementing the index by 1 each iteration;
    Access the value stored in each object at the key of item and push value into items array.
    return items array with comma and a space separating each value using the join method.
*/
function listItems(deliveryArray) {
  var items = [];
  for (var i = 0; i < deliveryArray.length; i++) {
    items.push(deliveryArray[i].item);
  }
  return items.join(', ');
}

/* The function searchOrder takes two parameters, deliveryArray (array of objects) & menuItem (string);
    Using a for loop, iterate over every object in the deliveryArray, beginning at index 0, incrementing the index by 1 each iteration;
    If the value stored in each object at the key of item is strictly equal to menuItem,
      return true
    Otherwise if the key item in order object does not equal menuItem, return false;
    Using the continue keyword, we continue the iteration instead of exiting the function code block, to evlauate each
    invocation of the searchOrder function.
*/
function searchOrder(deliveryArray, menuItem) {
  for (var i = 0; i < deliveryArray.length; i++) {
    if (deliveryArray[i].item === menuItem) {
      return true;
    } else continue;
  }  return false;
}




module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder,
}
