// balancedBrackets
// 문제
// 문자열을 입력받아 문자열 내의 모든 괄호의 짝이 맞는지 여부를 리턴해야 합니다.

// 다음 단계에 맞춰 함수를 작성해 보세요
// 괄호의 종류를 단 한가지로 한정합니다.
// 괄호의 종류를 늘려 모든 종류의 괄호에도 작동하도록 합니다.
// 괄호를 제외한 문자열이 포함된 경우에도 작동하도록 합니다.
// 입력
// 인자 1 : str
// string 타입의 괄호가 포함된 문자열
// 출력
// boolean 타입을 리턴해야 합니다.
// 주의사항
// 괄호의 종류는 (, )만 고려합니다.
// 괄호는 먼저 열리고((), 열린만큼만 닫혀야()) 합니다.
// 빈 문자열을 입력받은 경우, true를 리턴해야 합니다.

const balancedBrackets = function (str) {
    // TODO: 여기에 코드를 작성합니다.
    let stack = [];
    let brackets = str.split('');
    let open = ['(','{','['];
    let close = [')','}',']'];
    for (let bracket of brackets) {
      if (open.includes(bracket)) {
        stack.push(bracket)
      } else {
        let idx = open.indexOf(stack[stack.length-1])
        if (idx > -1 && idx == close.indexOf(bracket)) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
    return stack.length > 0 ? false : true;
  };
  