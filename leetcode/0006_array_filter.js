// 2634. Filter Elements from Array
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  return arr.filter((el, idx) => fn(el, idx))
};