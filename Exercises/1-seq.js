'use strict';

const seq = (a) => (b) => (typeof b === 'number' ? a(b) : seq((c) => a(b(c))));

module.exports = { seq };
