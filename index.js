/*Problem 1: Reverse a String
Write a function that takes a string and returns it reversed.

Example:
Input: "hello"
Output: "olleh"*/

const string = "I'm a coder";
const string2 = "hello";
const reversedString = (value) => value.split("").reverse().join("");
const newString = reversedString(string);
const newString2 = reversedString(string2);
//console.log({ ["I'm a coder"]: newString }, { ["hello"]: newString2 });

/***************************************************************************** */
/***************************************************************************** */

/*Problem 2: Count Vowels in a String
Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

Example:

Input: "programming"
Output: 3*/

//solution 1
const vowels = ["a", "e", "i", "o", "u"];
const input = "programming";
const numberOfVowels = (input) => {
  let output = 0;
  const arr = input.split("");
  for (let el of arr) {
    if (vowels.includes(el.toLowerCase())) {
      output++;
    }
  }
  return output;
};
const result = numberOfVowels(input);
//console.log(result);

//solution 2
const withReduce = (input) =>
  input.split("").reduce((accu, curr) => {
    if (vowels.includes(curr.toLowerCase())) return accu + 1;
    else return accu;
  }, 0);
//console.log(withReduce(input));

/***************************************************************************** */
/***************************************************************************** */

/*Problem 3: Check for Palindrome
Write a function that checks if a string is a palindrome (reads the same forward and backward).

Example:

Input: "madam"
Output: true
Input: "hello"
Output: false*/

/***************************************************************************** */
/***************************************************************************** */

/*Problem 4: Find the Maximum Number
Write a function that takes an array of numbers and returns the largest number.

Example:

Input: [5, 1, 9, 3]
Output: 9*/

const numbers = [5, 1, 9, 3];
const maxNumber = (numbers) => {
  return Math.max(...numbers);
};
//console.log(maxNumber(numbers));

/***************************************************************************** */
/***************************************************************************** */

/*Problem 5: Remove Duplicates from an Array
Write a function that removes all duplicate numbers from an array.

Example:

Input: [1, 2, 2, 3, 4, 4]
Output: [1, 2, 3, 4]*/

const duplicateArray = [1, 2, 2, 3, 4, 4];
const removeDuplicate = (arr) => {
  return [...new Set(arr)];
};
//console.log(removeDuplicate(duplicateArray));

/***************************************************************************** */
/***************************************************************************** */

/*Problem 6: Sum of All Numbers in an Array
Write a function that returns the sum of all numbers in an array.

Example:

Input: [1, 2, 3, 4]
Output: 10*/

const numArr = [1, 2, 3, 4];
const sumOfAllNumbers = (arr) => arr.reduce((accu, curr) => accu + curr, 0);
//console.log(sumOfAllNumbers(numArr));

/***************************************************************************** */
/***************************************************************************** */

/*Problem 7: Find Even Numbers in an Array
Write a function that returns all even numbers from a given array.

Example:

Input: [1, 2, 3, 4, 5, 6]
Output: [2, 4, 6]*/

const mixNum = [1, 2, 3, 4, 5, 6];
const allEvenNumbers = (arr) => arr.filter((el) => el % 2 === 0);
//console.log(allEvenNumbers(mixNum));

/***************************************************************************** */
/***************************************************************************** */

/*Problem 8: Capitalize First Letter of Each Word
Write a function that capitalizes the first letter of each word in a string.

Example:

Input: "hello world"
Output: "Hello World"*/

const sentence = "hello world";
const capitalizeTheFirstLetter = (str) =>
  str
    .split(" ")
    .map((el) => (el ? el[0].toUpperCase() + el.slice(1) : ""))
    .join(" ");
//console.log(capitalizeTheFirstLetter(sentence));

/***************************************************************************** */
/***************************************************************************** */

/*Problem 9: Find the Factorial of a Number
Write a function that calculates the factorial of a number using a loop.

Example:

Input: 5
Output: 120*/

/***************************************************************************** */
/***************************************************************************** */

/*Problem 10: PingPong Challenge
Write a function that prints numbers from 1 to 20.

Example:

For multiples of 3, print "Ping"
For multiples of 5, print "Pong"
For multiples of both 3 and 5, print "PingPong"
If the number is not a multiple of 3 or 5, print the number itself
Example Output:

1, 2, Ping, 4, Pong, Ping, 7, 8, Ping, Pong, 11, Ping, 13, 14, PingPong, 16 …..*/
