/**Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
 * 
Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k. */

const removeElement = (arr, num) => {
  let k = 0; //number of elements that are not equal

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== num) {
      arr[k] = arr[i];
      k++;
    }
  }
  return k;
};
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5, nums = [0,1,4,0,3,_,_,_]
console.log(removeElement([3, 2, 2, 3], 3));

/*Given:

একটি integer array nums
একটি single number val

Goal:
Array থেকে val এর সব occurrence remove করতে হবে in-place।
Return করতে হবে k → number of elements যা val এর সমান নয়।
Array এর প্রথম k positions থাকবে শুধু val ছাড়া values।
Remaining positions ignore করা যাবে।

Step 1: Initialize pointers
k = 0 → next slot যেখানে valid value বসবে
i = 0 → scan pointer, array traverse করবে

Step 2: Traverse array
For each i from 0 to nums.length-1:
যদি nums[i] !== val →
এটা valid element
nums[k] = nums[i] → write pointer দিয়ে বসাও
k++ → next valid slot ready
যদি nums[i] === val →
skip
write pointer কতো আছে তা ঠিক থাকে
শুধু i বাড়াও

Step 3: End result
First k elements → all valid elements (not equal to val)
k → number of valid elements → return k
Remaining positions → ignore করা যাবে

Step 4: Dry Run Example
Array: [0, 1, 2, 2, 3, 0, 4, 2], val = 2
i	nums[i]	Action	k	Array State (partial)
0	0	0 != 2 → arr[0]=0	1	[0,...]
1	1	1 != 2 → arr[1]=1	2	[0,1,...]
2	2	2 == 2 → skip	2	[0,1,...]
3	2	2 == 2 → skip	2	[0,1,...]
4	3	3 != 2 → arr[2]=3	3	[0,1,3,...]
5	0	0 != 2 → arr[3]=0	4	[0,1,3,0,...]
6	4	4 != 2 → arr[4]=4	5	[0,1,3,0,4,...]
7	2	2 == 2 → skip	5	[0,1,3,0,4,...]

✅ Final:
k = 5
First 5 elements: [0,1,3,0,4]
Remaining positions ignore
Step 5: Complexity
Time: O(n) → single pass over array
Space: O(1) → in-place, no extra array */
