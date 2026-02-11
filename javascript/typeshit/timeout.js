/**
 * Exploration of setTimeout and setInterval.
 * Main differences:
 * 
 * The setTimeout function executes the function
 * one time after the specified delay, we can
 * also achieve a loop with a nested setTimeout.
 * 
 * Instead setInterval, executes the provided 
 * function every time the delay finishes, and
 * it executes it multiple times(loop), a cons 
 * is that it fires even if the instance of the 
 * function is still running, this behavior won't
 * happen with setTimeout
 * 
 * This cons is the main reason for using nested
 * timeout to achieve for an example a server that
 * send a response with a delay of 2 seconds from the
 * last one, and i think its important to say that
 * the nested timeout has to be on the bottom of the
 * function to achieve this behavior
 */

const fn = (num1, num2) => {
    console.log('boobies');

    return num1 + num2;
}

let timerId = setTimeout(fn, 3000, 3, 4);
let intervalId = setInterval(fn, 3000, 3, 4);

console.log(timerId);
console.log(intervalId);

setTimeout(() => {
    clearInterval(intervalId);
    console.log('Stopped the loop!!');
}, 7000)

//nested timeout
let timIDI = setTimeout(function tick() {
  console.log('tick');
  console.log(new Date)
  timIDI = setTimeout(tick, 2000); // (*)
}, 2000);