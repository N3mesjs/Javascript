const a = "5";
const b = "10";

/**
 * +operator is a shorthand to convert a string to a number,
 * similarly to Number() function.
 * 
 * In the last line we see that if one operand is a string
 * the other operand is converted to string and concatenation happens.
 */
console.log(+a + +b);
console.log(Number(a) + Number(b));
console.log(+a + b);