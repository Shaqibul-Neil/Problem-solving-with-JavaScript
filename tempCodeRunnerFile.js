const equalToGiven = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(i, j);
      if (arr[i] + arr[j] === num) return arr[i] + arr[j];
    }
  }
};
console.log(equalToGiven([2, 7, 11, 15], 18));