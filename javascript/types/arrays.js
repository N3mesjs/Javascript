/**
 * Equivalent ways to create arrays in JavaScript,
 * This is the same for any other type in js.
 */

let fruits = new Array("Apple", "Banana", "Cherry");
// or
let vegetables = ["Carrot", "Broccoli", "Spinach"];

vegetables.push("Potato"); // adds an element at the end of the array
vegetables.shift(); // removes the first element of the array
console.log(vegetables);

fruits.pop(); // removes the last element of the array
fruits.unshift("Mango"); // adds an element at the beginning of the array
console.log(fruits);