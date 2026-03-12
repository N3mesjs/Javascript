class User {
    company = "Tech Company";

    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I work at ${this.company}.`);
    }

    ["greet" + "User"]() {
        console.log(`Welcome, ${this.name}!`);
    }

    get name() {
        return this._name; //Here we are using the underscore
                           //to prevent an infinte loop of the getter
                           //calling itself when we try to access 
                           // the name property.
                           //Also it is a convention to modify internal
                           //variables with an underscore to 
                           // indicate that they are private 
                           // and should not be accessed directly.
    }

    set name(value) {
        this._name = value;
    }
}

class Admin extends User {
    constructor(name, age, email, role) {
        super(name, age, email);
        this.role = role;
    }
    
    fireUser(user) {
        console.log(`${user.name} has been fired by ${this.name}.`);
    }
}

class Guest extends User {
    constructor(name, age, email, visitReason) {
        super(name, age, email);
        this.visitReason = visitReason;
    }
    
    requestAccess() {
        console.log(`${this.name} is requesting access for ${this.visitReason}.`);
    }
}

let user1 = new User('Alice', 30, 'alice.cice@gmail.com');

console.log(user1.name); // Alice
user1.name = 'Bob';
console.log(user1.name); // Bob

user1.greetUser(); // Welcome, Bob!