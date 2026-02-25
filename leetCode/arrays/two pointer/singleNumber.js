/**Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space. 
Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1
*/

const singleNumber = (arr) => {
  let k = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[k]) {
      k = k + 2;
    } else {
      i++;
      k++;
    }
  }
  return k;
};
console.log(singleNumber([2, 2, 1]));
