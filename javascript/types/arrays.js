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

/**
 * Array.splice() The most powerful method for arrays
 * that can be used to add, remove, replace elements in an array.
 * for the start index, we can use negative numbers to count from 
 * the end of the array.
 */
fruits.splice(1, 1, "Orange");
console.log(fruits);

vegetables.splice(-2, 1, "Lettuce", "Cabbage");
console.log(vegetables);

/**
 * Different ways to iterate over an array
 */

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// for..in loop return the index/keys
for (let fruit in fruits) {
    console.log(fruits[fruit]);
}

// for..of loop return the values
for (let fruit of fruits) {
    console.log(fruit);
}

vegetables.forEach(() => {
    console
})