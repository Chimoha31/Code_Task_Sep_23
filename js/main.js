'use strict';

function isSorted(arr) {
  let acs = true;
  let decs = true;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i-1] > arr[i]) {
      decs = false
    }
    if(arr[i-1] < arr[i]) {
      acs = false;
    }
  }
  return acs || decs
}

console.log(isSorted([]));
console.log(isSorted([42]));
console.log(isSorted([39, 42])); 
console.log(isSorted([42, 39])); //incorrect ( to true)
console.log(isSorted([1, 2, 3, 4, 5])); 
console.log(isSorted([5, 4, 3, 2, 1])); //incorrect (to true)
console.log(isSorted([1, 5, 2]));