/**Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.
Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"] */

//Solution 1:
const reverseAString = (arr) => {
  for (let i = 0; i < Math.round(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
};
//console.log(reverseAString(["h", "e", "l", "l", "o"]));

//Solution 2:
const rev = (s) => {
  return s.reverse();
};
console.log(rev(["h", "e", "l", "l", "o"]));

/**Mapping
 *length = 5
Math.round(5/2) = 3
Loop চলবে i = 0, 1, 2

Iteration 1 → 
i = 0
temp = arr[0]
temp = "h"
Array এখনো:
["h","e","l","l","o"]
arr[0] = arr[4]
arr[0] = "o"
arr[4] = temp
arr[4] = "h"
Array:
["o","e","l","l","h"]

Iteration 2 → 
i = 1
temp = arr[1]
temp = "e"
arr[1] = arr[3]
arr[1] = "l"
Array:
["o","l","l","l","h"]
Line 3:
arr[3] = temp
arr[3] = "e"
["o","l","l","e","h"]
 */
