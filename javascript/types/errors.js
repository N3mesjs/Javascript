// function ValidationError(message){
//     this.name = 'ValidationError';
//     this.message = message;
//     this.stack = (new Error()).stack;
// }

// ValidationError.prototype = Object.create(Error.prototype);

// let error = new ValidationError("This is a validation error");

// console.log(error.name); // ValidationError
// console.log(error.message); // This is a validation error
// console.log(error.stack); // Stack trace

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

function test() {
  throw new ValidationError("Whoops!");
}

try {
  test();
} catch(err) {
  alert(err.message); // Whoops!
  alert(err.name); // ValidationError
  alert(err.stack); // a list of nested calls with line numbers for each
}