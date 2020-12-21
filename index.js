require('metacall');
const { foldr, call } = require('delete_this.py');

// TODO: Import directly the Python package instead of a wrapper
// const { foldr, call } = require('fn.op');

console.log(foldr(call, 10)([s => s * s, k => k + 10]));
