

Array.prototype.flatten = function(n, array = []){
  if (n < 1) return array;
  //let array;
  
  if (n >= 1 || !n) array = this.reduce((acc, val) => Array.isArray(val) ? acc.concat(val) : acc.concat(val), []);
  console.log(n, array)
  // else{
  // const stack = [...this];
  // const res = [];

  // while (n--){
  //   const next = stack.pop();

  //   if (Array.isArray(next)) stack.push(...next);
  //   else res.push(next)
  // }
  
  // console.log(stack, res)
  // return this.flatten(n-1);
  
  // else return array = this.reduce((acc, val) => {
  //   console.log(val)
  //   if (Array.isArray(val)) {
  //     //console.log(n)
  //     acc.concat(val);
  //     //n--;
  //     return this.flatten(n-1)
  //   }
    
  //   else {
  //     // console.log(acc)
  //     return acc.concat(val)
  //   }
  // }, []);
  // console.log(array)
  return array = this.flatten(n-1, array)
}

const arr = [[1,2], 6, [3,[4,5]]] 

//console.log(arr.flatten())
arr.flatten()