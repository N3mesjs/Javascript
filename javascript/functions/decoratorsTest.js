function heavyWokr(x) {
    return x * x;
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

heavyWokr = cachingDecorator(heavyWokr);
heavyWokr(5);
heavyWokr(5);

