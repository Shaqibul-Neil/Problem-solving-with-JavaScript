/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.
The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored. */

//Solution 1: Best

const removeDuplicatedFromSortedArray = (arr) => {
  if (arr.length === 0) return 0;
  let unique = arr[0]; //1 arr[unique]--> arr[1]=1
  let k = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== unique) {
      unique = arr[i];
      arr[k] = unique;
      k++;
    }
  }
  return k;
};
console.log("1st", removeDuplicatedFromSortedArray([1, 1, 2, 2, 3])); //[1,2,3,1,2]

//Solution 2:
const removeDuplicate = (arr) => {
  let position = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      //present position and tar ager position jdi same na hoi tahole
      arr[position] = arr[i];
      position++;
    }
  }
  return arr;
};
console.log("2nd", removeDuplicatedFromSortedArray([1, 1, 2, 2, 3]));

/**Full Mapping / Thought Process Explained

Initial Setup – Trackers (Pointers)
আমরা দুইটা pointer (tracker) ব্যবহার করি:

unique pointer/value → এখন পর্যন্ত আমরা যে last seen unique value পেয়েছি সেটাকে ধরে রাখে।
শুরুতে আমরা array এর প্রথম element (arr[0]) কে unique ধরি। কারণ sorted array তে প্রথম value সবসময় unique।

k pointer/index → এই pointer নির্দেশ করে next unique element কোথায় বসবে।
প্রথম unique value already index 0 তে আছে, তাই k শুরু করি 1 থেকে।

Iterate Over Array
আমরা loop চালাই i = 1 থেকে শেষ index পর্যন্ত, কারণ প্রথম value already unique হিসেবে ধরে নিয়েছি।
প্রতি iteration এ আমরা দেখি arr[i] কি previously seen unique value এর সমান না।

Check for New Unique
যদি arr[i] !== unique হয়, মানে এটা নতুন unique element।
আমরা তখন করব:
unique variable update করব → unique = arr[i]
(এখন এই value হবে “last seen unique value”)
arr[k] = arr[i] → next available slot-এ এই new unique value বসাবো
k++ → পরের unique value-এর জন্য next slot ready করব

Skip Duplicates
যদি arr[i] === unique হয়, মানে duplicate।
তখন কোনো action নেই, শুধু next iteration এ যাই।

End Result
Loop শেষে:
প্রথম k index-এ থাকবে সব unique values, এবং order preserved।
k হবে total unique element count।
arr[k:] অংশে থাকা values ignore করা যাবে (problem এ বলা হয়েছে)।

Edge Cases
যদি array empty হয় → arr[0] access করার আগে চেক করা দরকার।
যদি array length 1 হয় → loop একবারও চলবে না, k = 1 ঠিক থাকবে। */
