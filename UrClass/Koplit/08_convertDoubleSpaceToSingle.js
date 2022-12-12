// 문제
// 문자열을 입력받아 해당 문자열에 등장하는 두 칸의 공백을 모두 한 칸의 공백으로 바꾼 문자열을 리턴해야 합니다.

// 주의 사항
// 두 칸을 초과하는 공백은 존재하지 않는다고 가정합니다.

function convertDoubleSpaceToSingle(str) {
    let strArr = str.split(' ');
    return strArr.filter(str => str).join(' ');
  }
  