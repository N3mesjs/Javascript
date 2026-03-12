# JS Classes

Basically js doesn't natively have classes so these are created with
a syntactic sugar.

A class for example:
```
class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log('Hi! ' + this.name);
    }
}
```

Notice that commas between methods aren't needed.

## A Syntactic sugar
So why is it a syntactic sugar?
If we try to get the type of the class we get a function.
So it is a constructor function that puts all his methods inside
the .prototype and also the constructor!

So any object can access to the methods.
Other than that classes were made only for other developers to use
OOP without going crazy with prototypes and constructor functions

### Syntax recap
- No commas needed between methods and variables
- No need to use let, var, const to declare a variable

### Class Fields
Class Fields are properties that u can assign to the classes
and are varibles declared without using the let, var, const
and are not added to the .prototype but they are in every
instance of the objects

---

## Inheritance

Inheritance is pretty basic but just one this, when we inherith
the child class sets its prototype with his methods and constructor
but, it inheriths the methods from the father class so the 
[[Prototype]] of the child class will be the father class

### Arrow Functions

Another thing about arrow functions:
They don't have the this keyword, but also no super keyword! so 
if super is called it will be taken from the outer envirorment of
the arrow funcition