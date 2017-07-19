'use strict';

module.exports = exports = {};

const fp = require('./lib/fp.js');

exports.upCase = arr => fp.map(arr, el => el.toUpperCase());

console.log(exports.upCase(process.argv));
