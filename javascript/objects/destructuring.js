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