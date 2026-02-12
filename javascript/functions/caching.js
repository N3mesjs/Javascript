/**
 * https://javascript.info/call-apply-decorators
 * 
 * This is a good way to deal with CPU hungry
 * functions but that have stable results, so 
 * we can cache them to recover some time instead
 * of recalculating
 */


function slowFn(x) {
    console.log(`A cpu heavy function called with the var: ${x}`);

    return x;
}

let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    // scary CPU-heavy task here
    alert("Called with " + x);
    return x * this.someMethod(); // (*)
  }
};

/**
 * Here's the first problem, we pass the function
 * code to our cachingDecorator function, but 
 * if we pass a function inside of an object
 * that especially works with his this contex
 * we lose that context by passing the raw code
 * to the caching function!
 * To solve this issue see ./call.js
 */

function cachingDecorator(fn) { //This one is a decorator function
    let cache = new Map();

    return function(x) {
        if (cache.has(x)) {
            return cache.get(x);
        }

        let result = fn(x);

        cache.set(x, result);
        return result;
    };
}

slowFn = cachingDecorator(slowFn);

console.log(slowFn(1));
console.log(slowFn(1) + ' this one is from cache');

console.log(slowFn(2));
console.log(slowFn(2) + ' this one is from cache');