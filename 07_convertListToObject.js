// 문제
// 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 각 배열을 이용해 만든 객체를 리턴해야 합니다.

// 주의 사항
// 중복되는 키의 경우, 초기의 값을 사용합니다.
// 빈 배열을 입력받은 경우, 빈 객체를 리턴해야 합니다.
// arr[i]의 길이가 0인 경우, 무시합니다.



function convertListToObject(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let obj = {};
    arr.forEach(([key, value]) => {
      if (key !== undefined && value !== undefined && obj[key] == undefined) {
        obj[key] = value;
      }
    })
    return obj;
  }
  