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
// const numberOfVowels = (input) => {
//   let output = 0;
//   const arr = input.split("");
//   for (let el of arr) {
//     if (vowels.includes(el.toLowerCase())) {
//       output++;
//     }
//   }
//   return output;
// };
// const result = numberOfVowels(input);
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
Input: "hello" olleh
Output: false*/
const word = "hello";
const isPalindrome = (str) => {
  // const reversedStr = str.split("").reverse().join("");
  // if (str === reversedStr) return true;
  // else return false;
  for (let i = 0; i < str.length; i++) {
    //console.log(str.length - i - 1);
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
};
//console.log(isPalindrome(word));
// console.log(word);

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

const aNumber = 5;
const factorialOfANumber = (num) => {
  if (num < 0) return 0;
  let total = 1;
  for (let i = 1; i <= num; i++) {
    //console.log(i, total);
    total = total * i;
  }
  return total;
};
//console.log(factorialOfANumber(aNumber));

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
const printsNumbers = (start, end) => {
  for (let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("PingPong");
    else if (i % 3 === 0) console.log("Ping");
    else if (i % 5 === 0) console.log("Pong");
    else console.log(i);
  }
};

//printsNumbers(1, 20);

/***************************************************************************** */
/***************************************************************************** */

/*Problem 11:Verify a prime number?*/
const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; //if divisible then not a prime
  }
  return true;
};
//console.log(isPrime(23));

/***************************************************************************** */
/***************************************************************************** */

/*Problem 12: Find all prime factors of a number?*/

const primeFactors = (num) => {
  let factors = [];
  if (num <= 1) return null;

  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      factors.push(i);
      num = num / i; //i=2 → 12 % 2 === 0 → push 2, num=6-->i=2 → 6 % 2 === 0 → push 2, num=3-->i=2 → 3 % 2 !== 0 → move next i while use koro karon same number multiple times divide hote pare, ar amra chai sob gulo prime factor ber korte.
    }
  }
  return factors;
};
//console.log(primeFactors(13));

//21 January,2025
/***************************************************************************** */
/***************************************************************************** */

/*Problem 12: Get nth Fibonacci number?*/
const getFibonacci = (num) => {
  const arr = [0, 1];
  for (let i = 1; i <= num - 2; i++) {
    const prev = arr[arr.length - 1];
    //console.log("prev", prev);
    const next = arr[arr.length - 2];
    //console.log("next", next);
    const fibo = prev + next;
    arr.push(fibo);
  }
  return arr;
};
//console.log(getFibonacci(10));

/***************************************************************************** */
/***************************************************************************** */

/*Problem 13: Find the greatest common divisor of two numbers?*/
const greatestCommonDivisor = (x, y) => {
  while (y !== 0) {
    //loop cholbe jotokkhon remainder 0 na hoy
    const remainder = x % y; //calculate remainder
    x = y; // shift numbers
    y = remainder; //update y with remainder
  }
  return x; //last non-zero x = GCD
};
//console.log(greatestCommonDivisor(48, 18)); //18)48( --->12)18(-->6)12(-->0;

/***************************************************************************** */
/***************************************************************************** */

/*Problem 14:Remove duplicate members from an array?*/
const remDuplicate = (arr) => {
  return [...new Set(arr)];
};
//console.log(remDuplicate([1, 1, 2, 3, 4, 2, 3, 5]));

/***************************************************************************** */
/***************************************************************************** */

/*Problem 15:merge two sorted array?*/
const arr1 = [1, 3, 5, 5, 7, 9];
const arr2 = [2, 4, 6, 8, 10];

const mergeArr = (arr1, arr2) => {
  const merge = [...new Set([...arr1, ...arr2].sort((a, b) => a - b))];
  return merge;
};
//console.log(mergeArr(arr1, arr2));

/***************************************************************************** */
/***************************************************************************** */

/*Problem 16:Swap two numbers without using a temp variable?*/
let num1 = 5;
let num2 = 7;
//console.log(num1, num2);
// const num3 = num1;
// num1 = num2;
// num2 = num3;
[num1, num2] = [num2, num1];
//console.log(num1, num2);

/***************************************************************************** */
/***************************************************************************** */

/*Problem 17:Reverse a string in JavaScript?*/
const revString = (str) => {
  return str.split("").reverse().join("");
};
//console.log(revString("hello"));

//22 January,2025
/***************************************************************************** */
/***************************************************************************** */

/*Problem 18: How would you reverse words in a sentence?*/
const revWord = (sentence) => {
  return sentence.trim().split(/\s+/).reverse().join(" "); //if multiple spaces in the code
};
//console.log(revWord("I am a   student"));

/***************************************************************************** */
/***************************************************************************** */

/*Problem 19: Find the first non repeating char in a string??*/
const firstNonRepeatChar = (word) => {
  // Type check
  if (typeof word !== "string") return null;
  for (let i = 0; i <= word.length - 1; i++) {
    if (word.indexOf(word[i]) === word.lastIndexOf(word[i])) {
      return word[i]; // first non-repeating found
    }
  }
  // No non-repeating char found
  return null;
};
// console.log(firstNonRepeatChar("aabbddcc")); // null
// console.log(firstNonRepeatChar("abbdc")); // "a"
// console.log(firstNonRepeatChar("")); // null
// console.log(firstNonRepeatChar("x")); // "x"
// console.log(firstNonRepeatChar(123)); // null

/***************************************************************************** */
/***************************************************************************** */

/*Problem 20: Remove duplicate characters from a sting??*/
const remDupCharString = (str) => {
  const strArr = str.split("");
  return [...new Set(strArr)].join("");
};
//console.log(remDupCharString("asdasd"));

/***************************************************************************** */
/***************************************************************************** */

/*Problem 21: How will you verify a word as palindrome?*/
const isWordPalindrome = (str) => {
  const word = str.toLowerCase();
  for (let i = 0; i < word.length / 2; i++) {
    console.log("Checking:", word[i], word[word.length - 1 - i]); // match/mismatch
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
// console.log(isWordPalindrome("Madam"));

/***************************************************************************** */
/***************************************************************************** */

/*Problem 22: Generate random between 5 to 7 by using defined function.*/
const genRandom = (a, b) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return Math.random() * (max - min) + min;
};
//console.log(genRandom(7, 5));

/***************************************************************************** */
/***************************************************************************** */

/*Problem 23: Find missing number from unsorted array of integers.*/
const missingNumberArray = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  for (let i = min; i <= max; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
};
// console.log(missingNumberArray([10, 12, 11, 14]));
// console.log(missingNumberArray([2, 3, 4, 6]));
// console.log(missingNumberArray([1, 3, 4]));

//23 January,2025
/***************************************************************************** */
/***************************************************************************** */

/*Problem 24: Get two numbers that equal to a given number?*/
const equalToGiven = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(i, j);
      if (arr[i] + arr[j] === num) return [arr[i], arr[j]];
    }
  }
};
//console.log(equalToGiven([2, 7, 11, 15], 22));
//Smart solution (HashMap / Set) — O(n)
const equal2Given = (arr, num) => {
  const seen = new Set();
  //console.log(seen);
  for (value of arr) {
    const needed = num - value;
    //console.log(needed);
    if (seen.has(needed)) {
      return [needed, value];
    }
    seen.add(value);
    //console.log(seen);
  }
  return null;
};
//console.log(equal2Given([2, 7, 11, 15], 22));
/***************************************************************************** */
/***************************************************************************** */

/*Problem 25: Find the largest sum of any two elements?*/
const largestSum = (arr) => {
  const sumArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      sumArr.push(arr[i] + arr[j]);
    }
  }
  return Math.max(...new Set(sumArr));
};
//console.log(largestSum([1, 2, 3, 4, 5]));
//Smart way
const largeSum = (arr) => {
  const sortDsc = [...arr].sort((a, b) => b - a);
  return sortDsc[0] + sortDsc[1];
};
//console.log(largeSum([1, 2, 3, 4, 5]));
/***************************************************************************** */
/***************************************************************************** */

/*Problem 26: Total number of zeros from 1 upto n*/
const numberOfZero = (n) => {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    let num = i;
    while (num > 0) {
      if (num % 10 === 0) count++;
      num = Math.floor(num / 10);
    }
  }
  return count;
};
// console.log(numberOfZero(100));
// console.log(numberOfZero(19));
// console.log(numberOfZero(101));
//Easier Fix
const totalZero = (n) => {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    const arr = i.toString().split("");
    //console.log(arr);
    const zeros = arr.filter((d) => d === "0").length;
    //console.log("zeros", zeros);
    count += zeros;
  }
  return count;
};
//console.log(totalZero(101));
/***************************************************************************** */
/***************************************************************************** */

/*Problem 27: Check whether a given string is a substring of bigger string*/
const substringOfBiggerString = (str1, str2) => {
  if (str1.includes(str2)) return true;
  return false;
};
// console.log(substringOfBiggerString("hello world", "world"));
// console.log(substringOfBiggerString("hello world", "lo wo"));
// console.log(substringOfBiggerString("hello world", "abc"));
// console.log(substringOfBiggerString("hello world", ""));
/***************************************************************************** */
/***************************************************************************** */

//27 January,2025
/***************************************************************************** */
/***************************************************************************** */
/*Problem 28: Given an integer x, return true if x is a palindrome, and false otherwise.*/
//string Approach
// const isNumberPalindrome = (x) => {
//   const str = x.toString().split("");
//   if (str.includes("-")) return false;
//   for (let i = 0; i < Math.floor(str.length / 2); i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(isNumberPalindrome(10));
// console.log(isNumberPalindrome(121));
// console.log(isNumberPalindrome(-121));

//Number Approach
const isNumberPalindrome = (x) => {
  //last digit 0 but the whole number is not 0 --->10 % 10 = 0(last digit 0) AND x !== 0 means 10 !== 0 → true ✅ 0 !== 0 → false ❌
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  let reversedHalf = 0;
  while (x > reversedHalf) {
    const lastDigit = x % 10; //121 % 10 = 1
    reversedHalf = reversedHalf * 10 + lastDigit; //0*10+1=1--> 1*10+2 =12
    x = Math.trunc(x / 10); //cut last digit--> 121/10=12-->12/10=1
  }
  console.log("reversedHalf", reversedHalf);
  console.log("x", x);
  return x === reversedHalf || x === Math.trunc(reversedHalf / 10);
  /*✅ Case 1: Even length (1221)
  x = 12
  reversedHalf = 12 
  👉 সরাসরি equal
  ➡️ palindrome ✅
  */
  /*✅ Case 2: Odd length (121) 
  x = 1
reversedHalf = 12
👉 মাঝের digit (2) ignore করতে হবে
তাই:

Math.trunc(12 / 10) = 1
👉 এখন compare:

x === 1 ✔
  */
};
// console.log(isNumberPalindrome(123));
// console.log(isNumberPalindrome(123321));
//Loop condition: x > reversedHalf → 12345 > 0 ✅
//Check: x > reversedHalf → 1234 > 5 ✅ → loop continues

/***************************************************************************** */
/*Problem 29: Get permutations of a string*/
function updateWord(wordList, beginWord, endWord) {
  // your code goes here
  if (!wordList.includes(beginWord) || !wordList.includes(endWord))
    return "none";
  return wordList.indexOf(endWord) - wordList.indexOf(beginWord);
}

// debug your code below
const beginWord = "hit";
const endWord = "cog";
const wordList = ["hit", "hot", "dot", "dog"];
// console.log(updateWord(wordList, beginWord, endWord));

/***************************************************************************** */
/*Problem 30: Roman to Integer*/
const roman = "III";
const valueOf = (char) => {
  switch (char) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
  }
};
const romanToInteger = (s) => {
  const arr = s.split("");
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const current = valueOf(arr[i]);
    const next = valueOf(arr[i + 1]) || 0;
    if (current < next) {
      console.log(sum);
      sum -= current;
      console.log(sum);
    } else sum += current;
  }
  return sum;
};

//romanToInteger("MCMXCIV");
/**Step trace (simplified):

i=0: M=1000, next=C=100 → 1000>100 → sum=1000
i=1: C=100, next=M=1000 → 100<1000 → sum=1000-100=900
i=2: M=1000, next=X=10 → 1000>10 → sum=900+1000=1900
i=3: X=10, next=C=100 → 10<100 → sum=1900-10=1890
i=4: C=100, next=I=1 → 100>1 → sum=1890+100=1990
i=5: I=1, next=V=5 → 1<5 → sum=1990-1=1989
i=6: V=5, next=undefined → 5>0 → sum=1989+5=1994 */

//Solution 2:  Problem is simpler to solve by working the string from back to front and using a map.
//Solution 3:  তুমি চাইলে split("") বাদ দিয়ে সরাসরি string iterate
//Solution 4:   Precompute all valid numerals (single + pairs) in map Make a map of "I":1, "IV":4, "V":5… "CM":900, "M":1000
//Solution 5:   Regex + reduce (fancy functional style)
//Solution 6:   Recursive approach

/***************************************************************************** */
/*Problem 31: Longest common prefix string*/
/**Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl" */
const longestCommonPrefix = (arr) => {
  let shortest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < shortest.length) {
      shortest = arr[i];
    }
  }
  for (let i = 0; i < shortest.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i] === shortest[i]) {
        console.log(arr[j][i]);
      }
    }
  }
};
// console.log(longestCommonPrefix(["flower", "flow", "flight"]));

const january = 31;
const numberOfPushups = (x) => {
  if (Number.isNaN(x)) return;
  else return january * x;
};
//console.log(numberOfPushups(100));

/***************************************************************************** */
/*Problem 32: occurrences of four*/
/**Impressed by the power of this number, Karan has begun to look for occurrences of four anywhere. */

//Solution 1
// const occurrencesOfFour = (x) => {
//   const arr = x.toString().split("");

//   let counter = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "4") {
//       counter += 1;
//     }
//   }
//   return counter;
// };
//Solution 2
const oc2 = (x) => {
  return x
    .toString()
    .split("")
    .reduce((accu, curr) => (curr === "4" ? (accu += 1) : accu), 0);
};

//solution 3
const oc3 = (x) => {
  let counter = 0;
  while (x > 0) {
    const digit = x % 10;
    if (digit === 4) {
      counter += 1;
    }
    console.log("x", x);
    x = Math.floor(x / 10);
    console.log("x/10", x);
  }
  return counter;
};
// console.log(oc3(4444));
/**x 4444
x/10 444
x 444
x/10 44
x 44
x/10 4
x 4
x/10 0 */

/*const fs = require('fs');


const input = fs.readFileSync(0, 'utf8').trim().split('\n');//input is an array with 1st index for how many inputs are there [5,447474,228,6664,40,81] --> here 5 is the number of inputs from the question

const T = Number(input[0]); // Number of inputs--> T=5 means i need to work with 5 numbers

const occurrencesOfFour = (x) => {
  const arr = x.toString().split("");
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "4") {
      counter += 1;
    }
  }
  return counter;
};

//now loop over the rest of the inputs. means i need to work it 5 times
for (let i = 1; i <= T; i++) {
  const num = Number(input[i]);
  console.log(occurrencesOfFour(num));
} */

/***************************************************************************** */
/*Problem 33: Protein Diet*/
/**
You consume X grams of protein daily. A balanced diet requires at least Y grams of protein per day. Determine whether your daily protein intake fulfills the recommended requirement. The daily protein intake is considered fulfilled if and only if 
X is greater than or equal to Y. */

const consumeProtein = (x, y) => {
  return x >= y ? "YES" : "NO";
};
console.log(consumeProtein(80, 65));
