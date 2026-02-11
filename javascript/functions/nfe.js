/**
 * 
 * @param {string} who 
 * 
 * This is the example of: Named Function Expression
 * So this is assigning a function to a variable,
 * and you can see that we also named the function
 * that isn't necessary but it's a good choise if
 * we have to recall the function inside the function
 * yes we could use the variable name, but it's not
 * that reliable cause if the variable name changes
 * the function breaks..
 */

let sayHi = function fn(who){
    if(who) {
        console.log(`Hello there, ${who}`);
    } else {
        fn("Guest");
    }
};

sayHi();