/**
 * This script imports the Greet function from greetings.js
 * So now we are using ES6 module syntax to import and use the function.
 * In the index.html file, make sure to include type="module" in the script tag
 * to enable ES6 module support in the browser.
 */

import Greet from './greetings.js';

const userName = 'Alice';
console.log(Greet(userName));