function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let countStart = null
  
    while (leftIdx <= rightIdx) {
      //find the middle value
      let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
      let middleVal = arr[middleIdx];
  
      if (middleVal === 1) {
        leftIdx = middleIdx + 1;
      } else if (middleVal === 0) {
        if (countStart === null || middleIdx < countStart){
            countStart = middleIdx;
        }
        rightIdx = middleIdx - 1;
      } else {
        return console.error("Only Ones and Zeroes are used in this function");
      }
    }
    
    if (countStart === null){
        return 0;
    }

    return arr.length - countStart
}

module.exports = countZeroes