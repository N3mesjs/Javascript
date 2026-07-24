/**
 * Promise chaining seems like magic but it is actually quite simple.
 * Each .then() returns a new Promise, with the result of the 
 * previous return of the .then(), so it implies that every .then() return
 * a new Promise even without explicitly returning a Promise object.
 */

let promise = new Promise((res, rej) => {
    setTimeout(() => res(1), 1000);
}).then(result => {
    console.log(result);
    return result * 2;
}).then(result => {
    console.log(result);
    return result * 2;
}).then(result => {
    console.log(result);
    return result * 2;
});