// Solution found here: https://stackoverflow.com/questions/50993498/flat-is-not-a-function-whats-wrong

Array.prototype.flatten = function(depth) {
  return this.reduce((acc, val) => acc.concat(Array.isArray(val) && depth > 1 
  ? val.flatten(depth - 1) : val), []);
}


const arr = [1,[2],[3,4],[[[5]]]];

arr.flatten(2)