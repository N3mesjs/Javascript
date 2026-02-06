let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
console.log( set.size ); // 3

for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}

// Set are not indexed!
for (let index in set) {
    console.log(index)
}

console.log(set.has(john));

// these are made for compatibility with maps
console.log(set.keys());
console.log(set.values());
console.log(set.entries());

let map = new Map(set.entries());
console.log(map);

console.log(Array.from(map));

console.log('--- exercises Maps & Sets ---')

// EXERCISES

console.log('---- ex 1 ----')

function unique(arr) {
  return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare, Krishna, :-O

console.log('---- ex 2 ----')

/**
 * 
 * Write a function aclean(arr) that returns an array cleaned from anagrams.
 */

function aclean(arr) {
    let map = new Map();

    for (let val of arr) {
        let sortedVal = val.toLowerCase().split("").sort().join();
        map.set(sortedVal, val);
    }

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"