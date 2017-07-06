var groceryList = [{
    groceryItem: "Apple",
    price: 1.50,
    quantity: 10
},
{
    groceryItem: "Milk",
    price: 3.99,
    quantity: 1
},
{
    groceryItem: "Cheese",
    price: 6.99,
    quantity: 2
},
{
    groceryItem: "Bread",
    price: 4.99,
    quantity: 1
},
{
    groceryItem: "Chicken",
    price: 8.99,
    quantity: 2
}];

//function to add oject to the array
function addToList (itemName, itemPrice, quantityCount) {
  var newObject = {groceryItem: itemName, price: itemPrice, quantity: quantityCount};
  groceryList.push(newObject);
}
//call the function
addToList('Turkey', 12.99, 2);

//function to remove an item from the array
function removeFromList(x) {
  groceryList.splice(x, 1);
}
//call the function
removeFromList(0)

var total = 0;
var tax = 0;
var grandTotal = 0;

groceryList.forEach(function(items){
    console.log(items.quantity + " of the item " + items.groceryItem + " costs $" + (items.quantity * items.price.toFixed(2)));
    total += (items.price * items.quantity);
    tax += (items.price * items.quantity) * 0.06;
    grandTotal += (items.price * items.quantity) + ((items.price * items.quantity) * 0.06);
});

console.log("Total: $" + total);
console.log("Tax: $" + tax.toFixed(2));
console.log("Grand Total: $" + grandTotal.toFixed(2));
