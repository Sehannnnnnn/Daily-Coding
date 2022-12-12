const largestProductOfThree = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
    let max = arr[0]*arr[1]*arr[2];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 1; j < arr.length; j++) {
        for (let k = 2; k < arr.length; k++) {
          if (i == j || j == k || k == i) continue;
          else {
            if (max < arr[i]*arr[j]*arr[k]) {
              max = arr[i]*arr[j]*arr[k]
            }
          }
        }
      }
    }
    return max;
  };

let output = largestProductOfThree([2, 1, 3, 7]);
console.log(output); // --> 42 (= 2 * 3 * 7)

output = largestProductOfThree([-1, 2, -5, 7]);
console.log(output); // --> 35 (= -1 * -5 * 7)