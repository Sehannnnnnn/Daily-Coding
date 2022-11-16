// rotatedArraySearch
// 문제
// 부분적으로 오름차순 정렬*된 정수의 배열(rotated)과 정수(target)를 입력받아 target의 인덱스를 리턴해야 합니다.
// 부분적으로 정렬된 배열: 배열을 왼쪽 혹은 오른쪽으로 0칸 이상 순환 이동할 경우 완전히 정렬되는 배열
// 예시: [4, 5, 6, 0, 1, 2, 3]은 왼쪽으로 3칸 또는 오른쪽으로 4칸 순환 이동할 경우 완전히 정렬됩니다.
// 입력
// 인자 1 : rotated
// number 타입을 요소로 갖는 배열
// rotated[i]는 정수
// 인자 2 : target
// number 타입의 정수
// 출력
// number 타입을 리턴해야 합니다.
// 주의사항
// rotated에 중복된 요소는 없습니다.
// target이 없는 경우, -1을 리턴해야 합니다.

const rotatedArraySearch = function (rotated, target) {
    let left = 0
    let right = rotated.length - 1;
  
    while (left <= right) {
      let middle = parseInt((right + left) / 2);
  
      if (rotated[middle] === target) {
        return middle;
      }
  
      if (rotated[left] < rotated[middle]) {
        // 왼쪽 절반이 정렬되어 있는 상태
        if (target < rotated[middle] && rotated[left] <= target) {
          right = middle - 1;
        } else {
          left = middle + 1;
        }
      } else {
        // 오른쪽 절반이 정렬되어 있는 상태
        if (target <= rotated[right] && rotated[middle] < target) {
          left = middle + 1;
        } else {
          right = middle - 1;
        }
      }
    }
  
    return -1;
  };


// let output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 5);
// console.log(output); // --> 5
console.log(divideArr([7,8,9,3,4,5,6], 0, 6, ));