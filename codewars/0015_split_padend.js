// Split Strings
/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

function solution(str){
  if (str.length === 0) return [];
  if (str.length % 2 !== 0) str += '_';
  const result = [];
  const strArr = str.split('');
  let couple;
  for (let i = 0; i < str.length / 2; i += 2) {
    couple = strArr[i] + strArr[i+1];
    result.push(couple)
  }
  return result;
}

console.log(solution("abcdef"));

//---------BETTER
function solution(s){
  return (s+"_").match(/.{2}/g)||[]
}