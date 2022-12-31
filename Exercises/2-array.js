'use strict';

const array = () => {
  const arr = [];
  const get = (i) => arr[i];
  get.push = (v) =>  arr.push(v);
  get.pop = () => arr.pop();

  return get;

};

module.exports = { array };
