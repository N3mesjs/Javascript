# IMPORT & EXPORT

This is a readme file created for a brief explanation 
of the topic

## Why do we need it

It is created because we can have a project with 
multiple files and to have a structure we divide the
content in multiple files to make it modular

So we can export functions, variables from a file to make
them public and accessible to any other file.

## How does it work

To make it work in our html file we have to import the 
script with the: `type="module"` so we can use
the special keywords such as import or export.

Also when a module is imported, we could import it
multiple times but only on the first import it is evaluated, only the top level

```
// 📁 alert.js
alert("Module is evaluated!");

---

// Import the same module from different files

// 📁 1.js
import `./alert.js`; // Module is evaluated!

// 📁 2.js
import `./alert.js`; // (shows nothing)
```

In the previous example the JS engine executes the first 
one and save the state in its cache, in the second import
it recognizes it was already executed and it doesn't 
execute it.

```
// 📁 admin.js
export let admin = {
  name: "John"
};

---

// 📁 1.js
import {admin} from './admin.js';
admin.name = "Pete";

// 📁 2.js
import {admin} from './admin.js';
alert(admin.name); // Pete

// Both 1.js and 2.js reference the same admin object
// Changes made in 1.js are visible in 2.js
```

This is because of the cached item on the JS engine
so it saves the state of the object!

### There is no this

When we have a script with `type="module"` we cannot access this, it is undefined

### Special features

- The scripts that uses `type="module"` are always _defered_ this means it will only be executed after the full load of the html file
- We can also have the **async**, for non module file we can use it only for external script, for module scripts instead, always. It is a good feature too load a JS file without having to block the load of the html and to load whenever its ready