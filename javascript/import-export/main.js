// This one is an example of a named
// import. But we could also import the entire module 
// as a single object, like this:
// import * as greetings from './greetings.js';
// greetings.greet('World');
// greetings.farewell('World');

/**
 * We could also import user like this:
 * import { default as User } from './user.js';
 * let user = new User('John Doe');
 * This way we can import the default export with 
 * a different name.
 * 
 * OR another way is to import the entire module
 * then assign the default export to a variable like this:
 * import * as userModule from './user.js';
 * let user = new userModule.default('John Doe');
 */

import { greet, farewell } from './greetings.js';
import User from './user.js';

let user = new User('John Doe');

greet('World');
farewell('World');
console.log(user.name);
console.log(import.meta)