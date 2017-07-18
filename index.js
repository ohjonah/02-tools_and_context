'use strict';

const fp = require('./lib/fp.js');

fp.map(process.argv, (u) => console.log(u.toUpperCase()));
