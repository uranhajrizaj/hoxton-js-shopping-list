let shoppingList = [['Milk', 1.2], ['Cocoa', 2], ['Salad', 2], ['Carrots', 2], ['Tomatoes', 2.5],['Ready Meals', 5]];
let totalPrice=0
let total=0
for (let i = 0; i < shoppingList.length; i++) {
    console.log(shoppingList[i][0] + ': ' + '£'+ shoppingList[i][1] )
  
    totalPrice += Number(shoppingList[i][1])
    total=totalPrice.toFixed(2)
    
}

console.log(`Total Price: £${total}`)