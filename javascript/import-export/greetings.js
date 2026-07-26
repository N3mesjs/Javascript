/**
 * import.meta is an object that contains
 * metadata about the current module,
 * such as its URL and other information.
 */

function greetings(name) {
  console.log(`Hello, ${name}!`);
  console.log(import.meta)
}

export function farewell(name) {
  console.log(`Goodbye, ${name}!`);
  console.log(import.meta)
}

// This is an example of a named export. 
// But we could also export the entire module
// Also its an alternative way to export the
// function
export { greetings as greet };