/***************************************************************************** */
/*Problem 1: Longest Common Prefix : Solution 1*/
/**
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl" */

const longestCommonPrefix = (arr) => {
  if (arr.length === 0) return "";
  let prefix = arr[0]; //initially prefix = flower
  for (let i = 1; i < arr.length; i++) {
    //compare with 2nd word like arr[1]= flow and prefix =flower
    while (arr[i].indexOf(prefix) !== 0) {
      //flow.indexOf(flower)-->-1(mismatch)
      prefix = prefix.substring(0, prefix.length - 1); //shrink by one letter-->flowe -->again flow.indexOf(flowe)-->mismatch shrink 1-->so on and so on-->flow.indexOf(flow)-->0 cz index of return 0 if matched then loop stops and return prefix. dn comes 3rd word like arr[2]= flight and prefix now is =flow and then repeats the process
      if (prefix.length === 0) return "";
    }
  }
  return prefix;
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
//console.log("flow".substring(0, "flow".length - 1)); -->flow

/**How to explain this solution in an interview compactly

Start simple:
“I take the first word as a reference prefix.”
Iterate through remaining words:
“For each word, I check if it starts with the current prefix. If not, I shrink the prefix from the end until it matches or becomes empty.”
Stop early:
“If at any point the prefix becomes empty, I return an empty string. Otherwise, after processing all words, the prefix contains the longest common prefix.”
Key points to highlight:
Efficient because we only shrink when needed
No nested loops over all characters of all words → better than naive approach
Works for edge cases: empty array, words with no common prefix, single word
Extra tip for impressing interviewers:
Mention that time complexity is O(S) where S = sum of all characters in all words, because each character is compared at most once per word during shrinking.
Space complexity = O(1) (only storing prefix), no extra arrays */
