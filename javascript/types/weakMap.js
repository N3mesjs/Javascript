let john = { name: "John" };

let array = [ john ];

john = null; // overwrite the reference

console.log(array);

/**
 * So What the hell are weak maps
 */

let jane = { name: "Jane" };

let weakMap = new WeakMap();

weakMap.set(jane, "ok!");
//jane = null;
console.log(weakMap)