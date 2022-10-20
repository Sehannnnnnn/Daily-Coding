// 문제
// 문자열을 입력받아 연속되는 문자가 있을 경우, 연속 구간을 반복되는 수와 문자로 조합한 형태로 압축한 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 알파벳 문자열
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
// 3개 이상 연속되는 문자만 압축합니다.

function compressString(str) {
    let output = ""
    let count = 1;
    let arr = str.split('');
    arr.push(' ');
    let prevStr = arr[0];
  
    for (let i = 1; i<arr.length+1; i++) {
      if (prevStr == arr[i]) {
        //앞과 현재가 같을때
        count ++;
      } else {
        //앞과 현재가 다를때
        if (count > 2) output += count + prevStr;
        else if (count == 2) output += prevStr.repeat(2);
        else output += prevStr;
        count = 1;
      }
      prevStr = arr[i]
    }
    output.trim();
    return output;
  }
  
  let output = compressString('wwwggopp');
  console.log(output); // --> abc
  
  output = compressString('wwwggoppopppp');
  console.log(output); // --> 3wggoppo4p  