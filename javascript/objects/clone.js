/**
 * Object Cloning vs Reference
 * In this example we see the difference between
 * cloning and  referencing an object.
 * The behavior of the two is different when comparing
 * the objects.
 * When we reference an object, both variables point to the same
 * object in memory, so they are equal.
 * When we clone an object, we create a new object with the same
 * properties, but they are different objects in memory, so they
 * are not equal.
 */

let car = {
    model: "Toyota",
    year: 2020
}

let carRef = car; // Reference to the same object
let carClone1 = {}; // Cloning the object

if (car == carRef) {
    console.log("car and carRef are the same (reference)");
}

// To create a clone we have two ways of doing it:
// 1. Using Object.assign()
// 2. Using a for..in loop
// 3. structuredClone

for (let key in car) {
    carClone1[key] = car[key]; // Cloning each property
}
/**
 * Using Object.assign() to clone an object,
 * This method takes a target object and one or more source objects
 * and copies the properties from the source objects to the target object.
 * also it overwrites properties with the same name.
 */
let carClone2 = Object.assign({}, car)

if (car == carClone1) {
    console.log("car and carClone are the same (reference)");
} else {
    console.log("car and carClone are different (cloned)");
}

/**
 * The structuredClone() method creates a deep clone of a given object,
 * meaning that it recursively copies all nested objects and properties,
 * resulting in a completely independent copy.
 * Before if we had a nested object inside the cloned object would have
 * still referenced the same nested object in memory.
 * Now with structuredClone() we have a completely independent copy.
 * 
 * DOES NOT WORK IF THERE IS A FUNCTION!
 */
let piaggio = {
    model: "Piaggio",
    year: 2021,
    sizes: {
        leftWheel: 18,
        rightWheel: 18
    },
}
let piaggioClone = structuredClone(piaggio);

piaggio.sizes.leftWheel = 19; // Modifying the original object

console.log(piaggio.sizes.leftWheel); // 19
console.log(piaggioClone.sizes.leftWheel); // 18, the clone is unaffected
