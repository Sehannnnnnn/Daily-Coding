const binarySearch = function (arr, target) {
    // TODO : 여기에 코드를 작성합니다.
    let len = arr.length;
    let mid = 0;
    let left = 0
    let right = len-1
    while (left <= right) {
      mid = parseInt((left+right) / 2);
      if (arr[mid] === target) return mid;
      if (arr[mid] > target) {
        right = mid -1;
      } else {
        left = mid + 1;
      }
    }
    return -1;
  };