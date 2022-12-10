function boardGame(board, operation) {
    // TODO: 여기에 코드를 작성하세요.
    let score = 0;
    let [x, y] = [0,0]
    score += board[x][y];
    for (let key of operation) {
      //key 'R' => [0,1]
      //key D => [1,0];
      let [x1,y1] = moveMal(key, [x,y]);
      if (x1 < 0 || y1 < 0 || x1 > board[0].length-1 || y1 > board.length -1){
        //out에 대한 처리
        return 'OUT'
      } else {
        // 이동했을때 점수 처리, 이동했을때 현위치 변환
        score += board[x1][y1];
        x = x1;
        y = y1;
      }
    }
    return score;
  };
  
  //R, L, U, D 에 따른 현 좌표 변동을 구현
  function moveMal (key, [x,y]) {
    switch (key) {
      case 'R':
        return [x,y+1];
      case 'L':
        return [x, y-1];
      case 'U':
        return [x-1, y];
      case 'D':
        return [x+1,y];
    }
  }
  
  const board1 = [
    [0, 0, 0, 1],
    [1, 1, 1, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 0]
  ]
  const output1 = boardGame(board1, 'RRDLLD');
  console.log(output1); //
  
  
  const board2 = [
    [0, 0, 1],
    [1, 1, 1],
    [1, 0, 0]
  ]
  const output2 = boardGame(board2, 'UUUDD');
  console.log(output2); // 'OUT'
  
  const board3 = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0]
  ]
  const output3 = boardGame(board3, 'DDRRRUDUDUD');
  console.log(output3); // 0