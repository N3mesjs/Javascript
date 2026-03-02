# Explainatory file of the F.prototype
## SEE https://javascript.info/function-prototype

by default any function has the prototype property

## why is that?

So it is assigned to any function because it is made 
especially for constructor functions, and by default
the body of that property is an object that has a 
constructor property that by default points to the
constructor function its self.

```
function Rabbit() {}
```

by default the constructor is:

```
prototype: {
    constructor: Rabbit
}
```

So basically the prototype was a way to automatically set the [[Prototype]]
of a child/object created using that constructor, and the [[Prototype]]
points to that prototype property, and also because the constructor is also
defined it also creates an object that has the property of that constructor.

So we have an horrizontal arrow between the constructor function and the
prototype, because its his property and the child object created with that
constructor function has as [[Prototype]] the prototype property and the constructor
property is needed to know where we created that child from

Basically when we invoke the new keyword of a constructor function it will execute every function or variable inside the constructor inside the child object with key and values, but it will inherith the functions inside the prototype so 
this can lead manage the memory efficiency.


---

NOTE THIS IS VERY IMPORTANT:
    1. The .prototype is ONLY for functions (specifically Constructor Functions).
    Normal objects don't have it.
    2. EXCEPTION: Arrow Functions (() => {}) DO NOT have a .prototype property
    because they cannot be used with 'new'.
    3. WARNING: When you overwrite Rabbit.prototype = animal, you lose the 
    default "constructor" property. The new objects won't know they were 
    created by Rabbit anymore unless you manually re-add it!