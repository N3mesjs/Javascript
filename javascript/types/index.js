"use strict";


/**

 * +operator is a shorthand to convert a string to a number,

 * similarly to Number() function.

 * 

 * In the last line we see that if one operand is a string

 * the other operand is converted to string and concatenation happens.

 */

const a = "5";

const b = "10";

console.log(+a + +b);

console.log(Number(a) + Number(b));

console.log(+a + b);


/**

 * && operator returns the first falsy value or the last truthy value

 */

let truthy = 1 && "hello" && true;

let falsy = 1 && 0 && false;

console.log(`truthy value ${truthy}`);

console.log(`falsy value ${falsy}`);



/**

 * Nullish coalescing operator (??) returns the right-hand side operand

 * when the left-hand side operand is null or undefined, otherwise

 * it returns the left-hand side operand.

 */

let user = "John";

let fistName = null;

let nullUser = null;


let name = user ?? "Guest";

let defaultName = nullUser ?? "Guest";


console.log(`name: ${name}`);

console.log(`defaultName: ${defaultName}`);

/**
 * Chaining nullish coalescing operator (??)
 * This is useful when you want to provide multiple fallback values.
 * it'll return the first truethy value it encounters.
 */

console.log(nullUser ?? "caccca pui" ?? fistName ?? user ?? "No name provided");

/**
 * Symbols, a primitive Type,
 * It is created by using the Symbol method
 * it accepts a description, and the value
 * will be an unique value.
 * 
 * Why would i need to use it. It is a good
 * way to hide properties on an object, or 
 * if i get an object from a library and
 * don't want to take the risk of unintentionally
 * overwriting a property we can create a new
 * property named after a symbol so we know its
 * unique and safe. 
 * N.B. it will be invisible in the for..in.. cicle
 * and also in other methods, so its like an
 * invisible pocket
 */
const id = Symbol("id");



