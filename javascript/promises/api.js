// Promise.all
let map = new Map();

map.set('a', Promise.resolve(1));
map.set('b', Promise.reject(new Error('Promise rejected!')));
map.set('c', Promise.resolve(3));


Promise.all(map).then(results => {
    console.log(results); // [1, 2, 3]
}).catch(error => {
    console.log(error.message);
});