'use strict'

// https://javascript.info/object-properties

/**
 * Very basic file, explaining object properties,
 * So the properties of the object can have
 * properties such as enumerable(it wont show
 * in for in loops if false), writable(it cannot be
 * modified or reassigned if false) and configurable(
 * it cannot be deleted or modified if false)
 */

/**
 * Notice that we have two types of these method
 * one is to gather the property descriptor such as
 * getOwnPropertyDescriptor(obj, propName)
 * and we also have setters with defineProperty(obj, propName,
 * {options}), and if it doesn't exists it creates one,
 * we also have one for group, defineProperties, and its a good
 * way to clone an object and also get its properties
 */

let user = {
    name: 'Tony',
    lastName: 'Buzziol',
    sizes: {
        weigth: 59,
        height: 159,
    }
}

console.log(Object.getOwnPropertyDescriptor(user, 'name'))

Object.defineProperty(user, 'name', {
    writable: false,
    enumerable: false,
    configurable: false,
})

console.log(Object.getOwnPropertyDescriptor(user, 'name'))

//user.name = 'John'; // Throws an error if strict mode is active
console.log(user.name);

for (let i in user){
    console.log(i)
}

// GETTERS AND SETTERS

let obj  = {
    name: 'Jimmy',
    lastName: 'De Santa',
    get fullName() {
        return `${this.name} ${this.lastName}`;
    },
    set fullName(value) {
        [this.name, this.lastName] = value.split(' ');
    },
}

Object.defineProperty(obj, '_age', {
    value: 58,
    enumerable: true,
    writable: true,
    configurable: false,
})

Object.defineProperty(obj, 'age', {
    get() {
        return this._age;
    },
    set(value) {
        this._age = value;
    },
})

console.log(obj.fullName);
obj.fullName = 'Tony Buzziol'
console.log(obj.fullName);

console.log(obj.age)