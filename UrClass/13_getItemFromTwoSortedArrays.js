const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
    // TODO: 여기에 코드를 작성합니다.
    let i = 0;
    let j = 0;
    while(i+j<k) {
      if (arr1[i] <= arr2[j]) {;
        i++
      }
      else {
        j++
      }
      console.log(stack)
    }
    return stack[k-1]
  };
  

let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3];
let result = getItemFromTwoSortedArrays(arr1, arr2, 6);
console.log(result); // --> 8