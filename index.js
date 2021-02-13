// Require the 'op' submodule from 'fn' Python package
const { foldr, call } = require('fn.op');

// Invoke Python functions (it allows function composition between languages)
console.log(foldr(call, 10)([s => s * s, k => k + 10]));
