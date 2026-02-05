/**
 * Interesting fact about js primitives,
 * They are all primitive but they behave like objects
 * like they have methods and properties, and when
 * we try to access them, js behind the scenes
 * creates a temporary object wrapper around them
 * to give us access to those methods and properties.
 * 
 * Also strings are iterable, so we can use for..of
 * to loop over each character in the string
 * 
 * Length in the string is a property that
 * returns the length of the string, so its
 * like a static value that we can access
 * 
 * Interesting fact about strings, they are like 
 * arrays of chars!!, so we can access characters
 * using the index notation str[0], str[1] etc,
 * NOTE that this behavior is shared between
 * multiple programming languages like python, java, C etc
 */

const str = "  Ciccio Bello ha la bua!!  "

console.log(`String length: ${str.length}`);
console.log(`Without trim: '${str.trim()}'`);
console.log(`Without the letter i: '${str.replace('i', "")}'`);
console.log(`the 4th letter of the sentence is: ${str[3]}`);

str[0] = "L"; // this won't work, strings are immutable

let tempStr = "";

for (let char of str) {
    tempStr = tempStr + (char);
}

console.log(tempStr);

console.log('I\'m a string that uses single quotes\n' 
    + 'yeah! i could use double quotes too!" without using the \\');