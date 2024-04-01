// 2635. Apply Transform Over Each Element in Array
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  return arr.map((el, idx) => fn(el, idx))
};