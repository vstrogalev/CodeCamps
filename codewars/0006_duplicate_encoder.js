// Duplicate Encoder
/*The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
*/

function duplicateEncode(word){
  if (word.length === 0) return '';
  if (word.length === 1) return '(';
  
  const wordArr = word.toLowerCase().split('');
  let result = '';
  
  for (let i = 0; i < wordArr.length; i++) {
    result += [
      ...wordArr.slice(0, i), 
      ...wordArr.slice(i+1, wordArr.length -1)
    ].includes(wordArr[i]) ? ')' : '('
  }
  return result;
}
