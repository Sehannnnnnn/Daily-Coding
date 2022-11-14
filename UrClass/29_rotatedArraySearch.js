// rotatedArraySearch
// 문제
// 부분적으로 오름차순 정렬*된 정수의 배열(rotated)과 정수(target)를 입력받아 target의 인덱스를 리턴해야 합니다.

const e = require("express");

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

let rotatedArraySearch = (rotated, target) => {

}

const divideArr = (arr, fstIdx, lstIdx, target) => {
    // console.log(arr);
    if (arr[fstIdx] == target) return fstIdx;
    if (arr[lstIdx] == target) return lstIdx;
    // fstIdx와 lstIdx간 차이가 두개 이상일때
    let midIdx = parseInt((fstIdx+lstIdx+1)/2)
    console.log(fstIdx,  midIdx, lstIdx);
    if (target > arr[fstIdx]) {
        console.log(arr[midIdx])
        if (target > arr[midIdx]) {
            return divideArr(arr, fstIdx, midIdx, target);
        } else {
            return divideArr(arr, midIdx, lstIdx, target);
        }
    } else {
        if (target > arr[midIdx]) {
            return divideArr(arr, midIdx, lstIdx, target);
        } else {
            return divideArr(arr, fstIdx, midIdx, target);
        }
    }
}

// let output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 5);
// console.log(output); // --> 5
console.log(divideArr([7,8,9,3,4,5,6], 0, 6, 8));