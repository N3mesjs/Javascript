/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number} the sum of the two
 * numbers
 * 
 * So, functions are objects!, also they also
 * have some properties you can access,
 * like .name or .length to access the number
 * of parameters.
 * But we can also define custom propreties for
 * our functions like in this case, we have
 * the count property
 */

function sum(a, b){
    sum.count++;

    return a+b;
}

sum.count = 0;

console.log(sum.length);
console.log(sum.count);
console.log(sum(2,2));
console.log(sum.count);


function ask(question, ...handlers) {
  let isYes = confirm(question);

  for(let handler of handlers) {
    if (handler.length == 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }

}

// for positive answer, both handlers are called
// for negative answer, only the second one
ask("Question?", () => alert('You said yes'), result => alert(result));