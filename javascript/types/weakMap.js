let john = { name: "John" };

let array = [ john ];

john = null; // overwrite the reference

console.log(array);

/**
 * So What the hell are weak maps?? WeakMap is litterally a map, 
 * but It only take keys that are objects,And the reference to is 
 * is weak, so if that object is deleted, set to null we lose that 
 * value, that behavior won't happen with a normal map, in a map
 * if the reference is cancelled we still have its value inside the
 * map. The WeakMap is very useful for caching purposes or for data 
 * leaking issues.
 */

let jane = { name: "Jane" };

let weakMap = new WeakMap();

weakMap.set(jane, "ok!");
//jane = null;
console.log(weakMap)