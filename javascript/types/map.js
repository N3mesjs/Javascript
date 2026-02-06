/**
 * Map in javascript are similar to objects but they have some differences.
 * - They can have keys of any type, not just strings or symbols.
 * - They maintain the order of insertion, so when we iterate over a Map,
 *   we get the entries in the order they were added.
 * - They have a size property that returns the number of entries in the Map.
 * - They have built-in methods like set, get, has, delete, etc. to manipulate
 *   the entries in the Map.
 */

let cities = new Map();

cities.set("Rome", "Italy");
cities.set("Paris", "France");
cities.set("Berlin", "Germany");

console.log(cities);
console.log(cities.get("Rome")); // Italy

console.log("--------------------");

for (let num in cities) {
    console.log(num); // this won't work, Map is not an object
}

for (let [key, value] of cities) {
    console.log(`${key} is in ${value}`);
}

console.log("--------------------");

for (let key of cities.keys()) {
    console.log(key);
}

console.log("--------------------");

for (let value of cities.values()) {
    console.log(value);
}

console.log("--------------------");

for (let entries of cities) {
    console.log(entries);
}

console.log("--------------------");

/**
 * With maps we can also use objects as keys
 * but this is not possible with regular objects
 * Thats all because objects only accept strings 
 * or symbols as keys, so it will convert the object
 * to a string "[object Object]" which is not what
 * we want.
 * let's see an example:
 */

// Object example

let john = { name: "John" };

let exampleObj = new Object();
exampleObj[john] = "Developer";

console.log(john.toString()); // [object Object]
console.log(exampleObj); // Developer

// Map example

let jane = { name: "Jane" };

let exampleMap = new Map();
exampleMap.set(jane, "Designer");

console.log(exampleMap.get(jane)); // Designer
console.log(exampleMap);

console.log("--------------------");

let obj = {
    name: "Ciccio",
    age: 30,
    id: 12345,
    adminLvl: 5,
}

/**
 * Objects also have the methods to get keys, values and entries
 * but they are static methods of the Object class.
 * Also entries return an array of arrays, where each inner array
 * contains a key-value pair.
 * This is perfect to convert an object to a Map using
 * the Map constructor that accepts an iterable of key-value pairs.
 */

// From object to Map

console.log(Object.keys(obj)); // get all the keys of the object
console.log(Object.values(obj)); // get all the values of the object
console.log(Object.entries(obj)); // get all the entries of the object

let objMap = new Map(Object.entries(obj));
console.log(objMap); // convert the object to a map
console.log(objMap.entries());

// From Map to Object

/**
 * Very basic example, we take a map,
 * and use the entries method to get,
 * an array that contains arrays, with
 * keys and values, and with the static
 * method Object.fromEntries we get
 * an object
 */

let mapObj = new Map([
    ["name", "Luca"],
    ["age", 28],
    ["id", 67890],
    ["adminLvl", 3],
]);

mapObj.forEach((value, key, map) => {
    console.log(`${value}: ${key}`);

    if (key == "name" && value == "Luca"){
        map.set("isGay", true)
    }
})

let newObj = Object.fromEntries(mapObj.entries());
console.log(newObj);