// 문제
// 문자열을 입력받아 순서가 뒤집힌 문자열을 리턴해야 합니다.

// 주의 사항
// 단어는 공백으로 구분합니다.
// 연속된 공백이 존재할 수 있습니다.
// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.

function letterCapitalize(str) {
    // TODO: 여기에 코드를 작성합니다.
    let arr = str.split('');
    arr.forEach((ele, index) => {
      if (index == 0 || arr[index-1] === ' ') arr[index] = ele.toUpperCase();
    })
    return arr.join('');
  }
  