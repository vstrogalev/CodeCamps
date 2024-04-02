// Most frequently used words in a text
/*Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

Assumptions:
A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
Matches should be case-insensitive, and the words in the result should be lowercased.
Ties may be broken arbitrarily.
If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.*/
function topThreeWords(text) {
  if(!text.match(/\w/)) return []
  const textToArray = text.toLowerCase().match(/([\w']+)/gi);

  if(!textToArray) return []
  const wordsMap = textToArray.reduce((acc, el) => {
    if(!acc.has(el)) acc.set(el,1)
    else acc.set(el, acc.get(el)+1)
    return acc
  }, new Map());
  return [...wordsMap.entries()].sort((a,b) => b[1] - a[1]).map(el => el[0]).slice(0, 3);
}