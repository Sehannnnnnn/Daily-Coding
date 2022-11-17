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