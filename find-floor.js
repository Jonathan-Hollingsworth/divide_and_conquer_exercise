function findFloor(arr, num) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let currentFloor = null
  
    while (leftIdx <= rightIdx) {
        //find the middle value
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];
    
        if (middleVal > num) {
          rightIdx = middleIdx - 1;
        } else {
          if (currentFloor === null || middleVal > currentFloor) {
            currentFloor = middleVal
          }
          leftIdx = middleIdx + 1
        }
      }
    
    if (currentFloor === null){
        return -1;
    }

    return currentFloor
}

module.exports = findFloor