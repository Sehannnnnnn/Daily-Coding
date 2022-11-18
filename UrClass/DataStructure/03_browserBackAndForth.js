// 브라우저 뒤로 가기 앞으로 가기
// 문제
// 개발자가 되고 싶은 김코딩은 자료구조를 공부하고 있습니다. 인터넷 브라우저를 통해 스택에 대해 검색을 하면서 다양한 페이지에 접속하게 되었는데 "뒤로 가기", "앞으로 가기"를 반복하면서 여러 페이지를 참고하고 있었습니다.

// 그런데 새로운 페이지를 접속하게 되면 "앞으로 가기" 버튼이 비활성화돼서 다시 보고 싶던 페이지로 갈 수 없었습니다. 이러기를 반복하다가 김코딩은 스택 자료구조를 떠올리게 되었습니다.

// 브라우저에서 "뒤로 가기", "앞으로 가기" 기능이 어떻게 구현되는지 궁금해진 김코딩은 몇 가지 조건을 아래와 같이 작성하였지만, 막상 코드를 작성하지 못하고 있습니다.

// 조건
// 새로운 페이지로 접속할 경우 prev 스택에 원래 있던 페이지를 넣고 next 스택을 비웁니다.

// 뒤로 가기 버튼을 누를 경우 원래 있던 페이지를 next 스택에 넣고 prev 스택의 top에 있는 페이지로 이동한 뒤 prev 스택의 값을 pop 합니다.

// 앞으로 가기 버튼을 누를 경우 원래 있던 페이지를 prev 스택에 넣고 next 스택의 top에 있는 페이지로 이동한 뒤 next 스택의 값을 pop 합니다.

// 브라우저에서 뒤로 가기, 앞으로 가기 버튼이 비활성화일 경우(클릭이 되지않습니다)

function browserStack(actions, start) {
    // TODO: 여기에 코드를 작성합니다.
    if (typeof start !== 'string') return false;
    let prevstack = [];
    let curr = start;
    let nextstack = [];
    // action 발생마다
    actions.forEach((act) => {
      if (typeof act === 'number') {
        //뒤로가기
        if (act === -1 && prevstack.length !== 0) {
          nextstack.push(curr);
          curr = prevstack.pop();
        }
        //앞으로가기
        if (act === 1 && nextstack.length !== 0) {
          prevstack.push(curr);
          curr = nextstack.pop();
        }
      }
      //문자열이 입력될시
      else {
        nextstack = [];
        prevstack.push(curr);
        curr = act;
      }
      console.log(prevstack, curr, nextstack);
    })
    return [prevstack, curr, nextstack]
  }
  
  const actions = ["B", "C", -1, "D", "A", -1, 1, -1, -1];
  const start = "A";
  const output = browserStack(actions, start);
  
  console.log(output); // [["A"], "B", ["A", "D"]]