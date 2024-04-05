// Array element parity
/*
In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

Examples:
[1, -1, 2, -2, 3] => 3
3 has no matching negative appearance
[-3, 1, 2, 3, -1, -4, -2] => -4
-4 has no matching positive appearance
[1, -1, 2, -2, 3, 3] => 3
(the only-positive or only-negative integer may appear more than once)
*/

function solve(arr){
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === 0) continue;
    
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === 0) continue;
      
      if ((arr[i] + arr[j]) === 0) {
        arr[i] = 0;
        arr[j] = 0;
      }
    }
  }
  return arr.filter(el => el !== 0)[0]
};

//-----------BETTER
const solve=a=>a.find(e=>!a.includes(-e));
