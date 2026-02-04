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



