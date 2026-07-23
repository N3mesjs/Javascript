/**
 * A question may arise: is it faster to get glasses as pockets.glasses or head.glasses?
 * There is no difference! the engine optimizes property access, to remember
 * the path to the property so the performance is the same!
 */

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};