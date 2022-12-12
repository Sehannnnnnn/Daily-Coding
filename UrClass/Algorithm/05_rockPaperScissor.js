function rockPaperScissors (N) {
    // TODO: 여기에 코드를 작성합니다.
    const answer = [];
    const candidate = ['rock', 'paper', 'scissors']
    
    const redo = (arr, N) => {
      if (N == 0) return answer.push(arr);
      else {
        candidate.forEach((hand) => redo([...arr, hand], N-1));
      }
    }
  
    redo([], N);
    return answer;
  };