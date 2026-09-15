function heavyWokr(x) {
    return x * x;
}

let worker = {
    name: "John",
    surname: "Marston",

    heavyWork(x) {
        console.log(`${this.name} ${this.surname} is working with ${x}`);
        return x * x;
    }
}

function cachingDecorator(fn) {
    let cache = new Map();

    return function(x) {
        if(cache.has(x)){
            return cache.get(x);
        }

        let result = fn(x);
        cache.set(x, result);
        return result;
    };
}

worker.heavyWork = cachingDecorator(worker.heavyWork);
worker.heavyWork(5);
worker.heavyWork(5);

