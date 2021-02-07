function takeOrder(orderNum, deliveryArray) {
  if (deliveryArray.length < 3) {
    return deliveryArray.push(orderNum);
  } else {
    return deliveryArray;
  }
}

function refundOrder(orderNum, deliveryArray) {
  deliveryArray.splice(orderNum - 1, 1);
  return deliveryArray;
}

function listItems(deliveryArray) {
  var items = [];
  for (var i = 0; i < deliveryArray.length; i++) {
    items.push(deliveryArray[i].item);
  }
  return items.join(', ');
}

// function searchOrder(deliveryArray, menuItem) {
//   for (var i = 0; i < deliveryArray.length; i++) {
//     if (deliveryArray[i].item === menuItem) {
//     }
//   }
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
