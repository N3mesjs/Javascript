# JS Classes

Basically js doesn't natively have classes so these are created with a syntactic sugar.

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
So it is a constructor function that puts all his methods inside the .prototype and also the constructor!

So any object can access to the methods and variables.
Other than that classes were made only for other developers to use OOP without going crazy with prototypes and constructor functions

### Syntax recap
- No commas needed between methods and variables
- No need to use let, var, const to declare a variable