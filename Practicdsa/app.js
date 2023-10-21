function findNumber(arr) {
    let numFrequency = {};
  
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      if (numFrequency[num]) {
        numFrequency[num]++;
      } else {
        numFrequency[num] = 1;
      }
    }
  
    let mostFrequentNumber;
    let highestFrequency = 0;
  
    for (const num in numFrequency) {
      if (numFrequency[num] > highestFrequency) {
        highestFrequency = numFrequency[num];
        mostFrequentNumber = num;
      }
    }
  
    return mostFrequentNumber;
  }
  
  const inputArray = [ 25, 25, 25, 25, 25, 25, 25, 25, 1, 0, 15, 22, 22, 22, 22, 22, 21];
  const mostFrequent = findNumber(inputArray);
  console.log( mostFrequent);