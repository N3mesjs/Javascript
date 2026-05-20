/**
 * In javascript, there is the spread operator '...' that allows us to 
 * spread the elements of an array or the properties of an object into 
 * another array or object.
 */


/**
 * 
 * @param {int} a 
 * @param {int} b 
 * @returns {int} a + b
 * 
 * This is a simple function that takes two integers and returns their sum.
 * We can use the spread operator to call this function with an array of 
 * arguments instead of passing them one by one. This way
 * we can have a function that takes a variable number of arguments
 */
function sum(a, b) {
    return a + b;
}

/**
 * 
 * @param  {...any} args 
 * @returns {int} sum of all the arguments
 * 
 * This is a function that takes a variable number of arguments and returns their sum.
 * We can use the spread operator to call this function with an array of arguments 
 * instead of passing them one by one.
 */
function largeSum(...args) {
    let sum = 0;

    for(let arg of args) {
        sum += arg;
    }

    return sum;
}

/**
 * 
 * @returns {int} sum of all the arguments
 * 
 * This is the old fashion way, where javascript creates for us an array that includes
 * all the arguments and we can iterate through it
 */
function oldLargeSum() {
    let sum = 0;

    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
}
