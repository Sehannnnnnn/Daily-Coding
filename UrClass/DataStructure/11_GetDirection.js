function getDirections(matrix, from, to) {
    // TODO: 여기에 코드를 작성합니다.
    if (from === to) return true
    // 재귀적으로 불러와야할것같다. 
    // getDirection(from = 0,to = 2) => getDircetions(from = 1, to = 2)
    // 0 => [1, 3];
    // 한방에 가는길이 있을 경우
    if (matrix[from][to] === 1) {
      return true;
    }
    //새로운 매트릭스 생성
    let newMatrix = [];
    for (let i = 0; i<matrix.length; i++) {
      newMatrix.push([...matrix[i]]);
    }
    //매트릭스 순회
    for (let i = 0; i<newMatrix.length; i++) {
      if (newMatrix[from][i] === 1) {
        newMatrix[from][i] = 0;
        if (getDirections(newMatrix, i, to)) return true;
      }
    }
    return false
  }
  