// ; 문제
// ; 문자열을 입력받아 문자열 내에 아래 중 하나가 존재하는지 여부를 리턴해야 합니다.

// ; 'a'로 시작해서 'b'로 끝나는 길이 5의 문자열
// ; 'b'로 시작해서 'a'로 끝나는 길이 5의 문자열

// ; 주의 사항
// ; 대소문자를 구분하지 않습니다.
// ; 공백도 한 글자로 취급합니다.
// ; 'a'와 'b'는 중복해서 등장할 수 있습니다.

function ABCheck(str) {
  // code goes here
  str = str.toLowerCase();
  let arr = str.split('');
  let result = false;
  for (let i = 0; i < arr.length-5; i++) {
    if (arr[i] === 'a') {
      if (arr[i+4] === 'b') result = true; 
    }
    else if (arr[i] === 'b') {
      if (arr[i+4] === 'a') result = true;
    }
  }
  return result;
}