
// 20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];


let includesMeat=shoppingCart.includes("Meat");  // Check if the 'Meat' item is already in the shopping cart
// If the 'Meat' item is not already in the shopping cart, add it to the beginning of the array
if(includesMeat==false){

    shoppingCart.unshift("Meat");
    console.log(shoppingCart);
}

// Check if the 'Sugar' item is already in the shopping cart
let includesSugar=shoppingCart.includes("Sugar");
// If the 'Sugar' item is not already in the shopping cart, add it to the end of the array
if(includesSugar==false){
    shoppingCart.push("Sugar");
    console.log(shoppingCart);
}

// Remove the 'Honey' item from the shopping cart
shoppingCart.splice(shoppingCart.indexOf("Honey"),1);
console.log(shoppingCart);

// Replace 'Tea' with 'Green Tea' in the shopping cart
shoppingCart.splice(shoppingCart.indexOf("Tea"),1,"Green Tea");
console.log(shoppingCart);