/**
 * property name : new name to asign!, also for the destructuring
 * we use the name of the property to get, so not like arrays!
 * Instead we use the = sign to give the property a default
 * value so if its not present in the object we asign it
 */

let {height, width, title = "caccaToby"} = { height: 200, width: 100 }
console.log(height);
console.log(width);
console.log(title);

//TEST
let options = {
    title: "We WE",
    height: 300,
    width: 450,
    theme: {
        ui: 'dark',
        isForGay: true,
    },
}

let {
    title: t = "Micro-Soft!", 
    width: w = 400, 
    height: h = 3453, 
    ...rest
} = options;

console.log(t);
console.log(w);
console.log(h);
console.log(rest.theme.ui);

let {
    title: tit = "WE BELLO FINESTRA FIGA!",
    theme: {
        ui = "light",
    } = {}
} = options;

console.log(tit);
console.log(ui);


let preflightHeader = {
    ...options,
};

const array = [1,2,3,4,5,6];
const newAr = [...array, 7,8];
console.log(array);
console.log(...array);
console.log(array)

/**
 * NOTE: () => {} arrow functions, beyond this
 * keyword, don't also have the arguments keyword
 * so we are forced to use the ...rest method
 */

/**
 * Returns the sum of all the numbers given
 * 
 * @param  {...any} numbers 
 * @returns {number}
 * This function uses the spread operator to get all the number
 * you give as parameter, it must be the last argument of the
 * function, and it give you an array of the parameters
 */

function sum(...numbers) {
    let count = 0;

    for (let val of numbers) {
        count += val;
    }

    return count
}

console.log(sum(1,2,3,4,5,6,7,8,9,10));

/**
 * 
 * @returns {number} the sum of all numbers
 * 
 * This function behave the same way as the one made before
 * but it uses an old method called the arguments keyword
 * but it comes with a some withdrawals, it is like an 
 * array but its not an arraya, so you cannot access
 * to array methods, like .map, etc...
 */

function sum() {
    let count = 0;

    for (let val of arguments) {
        count += val;
    }

    return count
}

console.log(sum(1,2,3,4,5,6,7,8,9,10));
