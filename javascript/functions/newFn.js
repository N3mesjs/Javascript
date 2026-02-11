/**
 * In the example below we see the implementation
 * of the new Function method, that allow us
 * to create functions with the new keyword.
 * its pretty basic we have a list of parameters
 * and the last is the function body!
 * 
 * This type of function is not a closure
 * and it only access the global environment!
 */

let fn = new Function('a', 'b', `return a+b`)

console.log(fn(1,2));