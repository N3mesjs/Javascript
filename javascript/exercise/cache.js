'use strict'

/**
 * Little example to understand decorators functions 
 * and the this keyword better! 
 * N.B. we use the .apply(), its the same as call
 * but we can give an array and it will spread it
 * Also thanks to the caching we can see how fast 
 * it is!
 */

const bigSum = {
    name: 'Chico',
    phrase: 'Hey amico ecco la tua somma ',
    sum(a, b) {
        console.log(new Date)
        return (this.phrase + ((a*12e3) + (b*10e10)));
    }
}

function decoratorFunction(fn) {
    let cache = new Map();

    return function(a, b){
        if (cache.has(a+','+b)) {
            console.log(new Date)
            return cache.get(a+','+b)
        }

        let result = fn.apply(this, [a, b]);
        
        cache.set(a+','+b, result)
        return result;
    }
}

bigSum.sum = decoratorFunction(bigSum.sum);

console.log(bigSum.sum(1,5));
console.log(bigSum.sum(1,5));
console.log(bigSum.sum(1,5));
console.log(bigSum.sum(1,3));
console.log(bigSum.sum(1,5));