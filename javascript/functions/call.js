/**
 * QUICK EXPLAINATION of call method:
 * 
 * So we pass a function that is inside an obejct
 * to our wrapper method, but inside the function
 * our slow function doesn't have a this or more
 * precisely, it is the globalThis or undefined
 * for stict mode.
 * 
 * So normally if we call worker.slow() in this
 * case this the worker object, so it takes the
 * thing on the left. Basically this is set 
 * based on HOW the function is called
 * 
 * Inside the wrapper we have to use the 
 * func.call(context, ...args)
 * method and assign its context to this, that in 
 * this case is worker!!
 */

/**
 * We also have the .apply method, the only difference
 * is that the argument its an array
 * 
 * There is also a bind, method, but see it only
 * if dealing with this losing, when function is
 * called inside a callback!
 * 
 * See https://javascript.info/bind
 */

let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    // scary CPU-heavy task here
    console.log("Called with " + x);
    return x * this.someMethod(); // (*)
  }
};

function cachingDecorator(fn) { //This one is a decorator function
    let cache = new Map();

    return function(x) {
        if (cache.has(x)) {
            return cache.get(x);
        }

        // let result = fn(x)
        let result = fn.call(this, x);

        cache.set(x, result);
        return result;
    };
}

worker.slow = cachingDecorator(worker.slow);
worker.slow(1);

/**
 * Let's an example of using the func.call()
 * method
 */

function sayHi(phrase) {
    console.log(this.name + ': ' + phrase);
}

let user = { name: 'John' };
let admin = { name: 'Admin' };

sayHi.call(user, 'Ciao Mondo!');
sayHi.call(admin, 'Cacca Sbegmix!');

globalThis.name = 'cacca'
sayHi('cacca');
