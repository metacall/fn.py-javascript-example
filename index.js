// Require the 'op' submodule from 'fn' Python package
const { foldr, call, apply, flip } = require('fn.op');

// Invoke Python functions (it allows function composition between languages)
console.log(foldr(call, 10)([s => s * s, k => k + 10])); // 400

const add = (a, b) => a + b;
const sub = (a, b) => a - b;

console.log(apply(add, [1, 2])); // 3
console.log(flip(sub)(20,10)); // -10
