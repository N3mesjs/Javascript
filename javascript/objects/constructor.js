/**
 * 
 * @param {string} name
 * @returns {object} {name: name}
 * 
 * This is an example on how object constructor works
 * Basically, the function when its called with the new keyword
 * it creates an object, so on the first line there is an 
 * implicit: this = {}, so the this in the scope is an object
 * and it assigns name to the property name
 */

function User(name) {
    this.name = name
}

let userAdmin = {
  admin() {
    console.log("I am admin");
  }
};

let user = new User("Jack");
console.log(user.name);
console.log(typeof user);

/**
 * Optional chaining '?.'
 * console.log(user.size); Undefined
 * console.log(user.size.heigth); Error
 * so we add ?. after the property we aren't 
 * sure exists, so we won't get error blocking
 * the workflow but returnin a simple undefined
 * 
 * https://javascript.info/optional-chaining
 */

userAdmin.admin?.();
userAdmin?.admin?.();
console.log(user?.size?.height);

// SYMBOL TESTING
let id = Symbol("id");
console.log(id);

let test = {
    [id]: "We bello sono segreto nessuni mi trova!",
    print(){
        console.log("funzione bellina ;)");
    },
    name: "timoty"
}

console.log(test[id]);

for (let key in test) {
    console.log(test[key])
}
