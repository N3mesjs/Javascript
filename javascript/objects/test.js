let customKey = "Chiave figa cazz";

let user = {
    "Name and Surname": "Alex Alfarex",
    [customKey]: 67,
    age: 28,
};

let userTest = {
  name: "John",
  years: 30
};

console.log(user["Name and Surname"], user[customKey]);

let array = ["John", "Smith", "Edward", "Northon"];

let [firstName, ,lastName] = array;
console.log(firstName, lastName);
console.log(...array)

console.log(Object.entries(user));

for (let [key, value] of Object.entries(user)) {
    console.log(key, value);
}

//let { "Name and Surname": name, [customKey]: num, age } = user;
//console.log(name, num, age);

let{name, years: age, isAdmin = false} = userTest;
console.log(name, age, isAdmin);