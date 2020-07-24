

Array.prototype.flatten = function(n){
  if (n < 1 || !n) return;
  
  //else if (n === 1) return this.reduce((acc, val) => acc.concat(val), []);
  
  else return this.reduce((acc, val) => {
    console.log(acc)
    if (Array.isArray(val)) {
      console.log(n)
      n--;
      return acc.concat(this.flatten(n));
    }
    
    else {
      console.log(acc)
      acc.concat(val)
    }
  }, []);
}

const arr = [[1,2], 6, [3,[4,5]]] 

//console.log(arr.flatten())
arr.flatten(2)