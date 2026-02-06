/**
 * This code demonstrate the concept of iterables 
 * objects in JavaScript, which are objects that 
 * can be iterated over using a for..of loop.
 * To make an object iterable, we need to implement the
 * Symbol.iterator method, which returns an iterator object that
 * has a next() method that returns an object with two properties:
 * - done: a boolean that indicates whether the iteration is complete
 * - value: the current value of the iteration
 */

let range = {
  from: 1,
  to: 5
};

range[Symbol.iterator] = function() {
    return {
        current: this.from,
        last: this.to,
        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    }
}

for (let num of range) {
    console.log(num);
}

/**
 * Array-like objects are objects that have a length 
 * property and indexed elements, but they don't have 
 * array methods like push, pop, etc. so we use the
 * Array.from() method to convert them into real arrays.
 * 
 * @param {Object} arrayLike - An object that has a 
 * length property and indexed elements.
 * @return {Array} - A new array created from the 
 * array-like object.
 */

let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
}

let arr = Array.from(arrayLike);

console.log(arr);