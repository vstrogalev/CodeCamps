// Smallest possible sum
/*Given an array X of positive integers, its elements are to be transformed by running the following operation on them as many times as required:

if X[i] > X[j] then X[i] = X[i] - X[j]

When no more transformations are possible, return its sum ("smallest possible sum").

For instance, the successive transformation of the elements of input X = [6, 9, 21] is detailed below:

X_1 = [6, 9, 12] # -> X_1[2] = X[2] - X[1] = 21 - 9
X_2 = [6, 9, 6]  # -> X_2[2] = X_1[2] - X_1[0] = 12 - 6
X_3 = [6, 3, 6]  # -> X_3[1] = X_2[1] - X_2[0] = 9 - 6
X_4 = [6, 3, 3]  # -> X_4[2] = X_3[2] - X_3[1] = 6 - 3
X_5 = [3, 3, 3]  # -> X_5[1] = X_4[0] - X_4[1] = 6 - 3
The returning output is the sum of the final transformation (here 9).*/
function solution(numbers) {
  if(numbers.length === 1) return numbers[0];
  
  do {
    for(let i = 0; i < numbers.length - 1; i++) {
      if(numbers[i] > numbers[i+1]) {
        numbers[i] = numbers[i] % numbers[i+1]
        if(numbers[i] === 0) numbers[i] = numbers[i+1]
        let s = numbers[i+1];
        numbers[i+1] = numbers[i];
        numbers[i] = s;
      } else if (numbers[i+1] > numbers[i]) {
        numbers[i+1] = numbers[i+1] % numbers[i]
        if(numbers[i+1] === 0) numbers[i+1] = numbers[i]
      }
    }
  } while (numbers[0] !== numbers[numbers.length-1] || numbers[0] !== numbers[1]);

  return numbers.reduce((acc, el) => acc + el);
}