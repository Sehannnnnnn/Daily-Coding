// 문제
// 문자열을 입력받아 연속된 한자리 홀수 숫자 사이에 '-'를 추가한 문자열을 리턴해야 합니다.

// 주의 사항
// 0은 짝수로 간주합니다.

function insertDash(str) {
    // TODO: 여기에 코드를 작성합니다.
    let numArr = str.split('').map(ele => +ele);
    let output = '';
    for (let i = 0; i<numArr.length; i++) {
      if (isOdd(numArr[i]) && isOdd(numArr[i+1]) && i < numArr.length-1) {
        output += numArr[i] + '-'
      }
      else {
        output += numArr[i] + '';
      }
    }
    return output;
  }
  
  function isOdd(num) {
    return num % 2 == 0 ? false : true; 
  }
