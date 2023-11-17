function findRotatedIndex(arr, num) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let pivotFound = false
  
    while (leftIdx <= rightIdx) {
        //find the middle value
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if(pivotFound) {
          if (middleVal < num) {
            leftIdx = middleIdx + 1
          } else if (middleVal > num) {
            rightIdx = middleIdx - 1
          } else {
            return middleIdx
          }
        } else {
          if (middleVal > arr[middleIdx + 1]) {
            if(num >= arr[0]) {
              rightIdx = middleIdx + 1
              leftIdx = 0;
            } else {
              leftIdx = middleIdx + 1
              rightIdx = arr.length - 1;
            }
            pivotFound = true
          } else if (middleVal < arr[middleIdx - 1]) {
            if(num >= arr[0]) {
              rightIdx = middleIdx
              leftIdx = 0;
            } else {
              leftIdx = middleIdx
              rightIdx = arr.length - 1;
            }
            pivotFound = true
          } else if (middleVal === num) {
            return middleIdx
          } else {
            if(middleVal < arr[0]){
              rightIdx = middleIdx - 1
            } else {
              leftIdx = middleIdx + 1
            }
          }
        }
      }

    return -1;
}

module.exports = findRotatedIndex