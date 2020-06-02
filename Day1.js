//Given an array of integers, find the sum of its elements.

function simpleArraySum(ar) {
   
 
     var total = 0,
      len = ar.length;

  for (var i = 0; i < len; i++){
    total += ar[i];
  }

  return total;
}
var my_array = [1,2,3,4];
console.log( simpleArraySum( my_array ) );