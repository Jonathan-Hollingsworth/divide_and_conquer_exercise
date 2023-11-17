function findRotationCount(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
  
    while (leftIdx <= rightIdx) {
        //find the middle value
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal > arr[middleIdx + 1]) {
            return middleIdx + 1
        } else if (middleVal < arr[middleIdx - 1]) {
            return middleIdx
        } else {
            if(middleVal < arr[0]){
              rightIdx = middleIdx - 1
            } else {
              leftIdx = middleIdx + 1
            }
        }
      }

    return 0
}

module.exports = findRotationCount