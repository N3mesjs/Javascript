/**
 * With numbers we can use the letter e to represent
 * powers of ten, so for example:
 * 1e3 means 1 * 10^3 = 1000
 * 12e3 means 12 * 10^3 = 12000
 * 
 * Also this is a global notation used for all
 * programming languages
 * 
 * NOTE: numbers in js are saved as 64bit floating point numbers
 * using IEEE 754 standard double precision standard
 * https://en.wikipedia.org/wiki/Double-precision_floating-point_format
 */

let gigaNumber = 12e3; // 12 * 10^3

let exaNumber = 0xff; // 255 in hexadecimal
let octalNumber = 0o377; // 255 in octal
let binaryNumber = 0b11111111; // 255 in binary

console.log(gigaNumber);
console.log(exaNumber);
console.log(octalNumber);
console.log(binaryNumber);