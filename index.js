const { foldr, call } = require('fn.op.py');

console.log(foldr(call, 10)([s => s * s, k => k + 10]));
