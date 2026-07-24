/**
 * A promise is an object that takes as an argument a function called executor
 * that has two parameters, resolve and reject, that are also functions
 * so basically two callbacks, one for when the promise is resolved and one
 * for when the promise is rejected.
 */

//let promise = new Promise((resolve, reject) => {});

let myPromise = new Promise((resolve, reject) => {
  const operazioneRiuscita = false;

  setTimeout(() => {
    if (operazioneRiuscita) {
      resolve("Operazione riuscita!");
    } else {
      reject(new Error("Operazione fallita!"));
    }
  }, 2000);
});
 

/**
 * Key takeaways about JavaScript Promises:
 * 
 * 1. A promise can be in one of three states: pending, fulfilled, or rejected.
 * 2. A promise can only be settled (fulfilled or rejected) once. Subsequent calls to resolve/reject are ignored.
 * 3. Promises can be chained using .then(), .catch(), and .finally():
 *    - .then() can take up to two arguments: a success callback (onFulfilled) and an error callback (onRejected).
 *    - If the promise is rejected and NO second argument is provided in .then(), the error bypasses .then() 
 *      and drops into the next .catch() in the chain.
 *    - If a second argument IS provided in .then(), it handles the initial rejection. The downstream .catch() 
 *      will ONLY be triggered if an error is thrown INSIDE either of the callbacks of that .then().
 * 4. Promises solve "Callback Hell" by flattening asynchronous control flow into a linear, chainable structure.
 * 5. Always pass an instance of the `Error` object to `reject()`. This captures the call stack (`error.stack`) 
 *    making debugging significantly easier.
 */

myPromise
.then(result => console.log(result), error => console.log(error.message))
.catch(error => console.log(error));