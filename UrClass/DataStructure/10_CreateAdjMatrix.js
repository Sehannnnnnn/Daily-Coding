function createMatrix(edges) {
    let max = 0;
    // edges 순회하며 기징 max vertex 찾기
    for (let [start, end, type] of edges) {
      if (max < Math.max(start, end)) max = Math.max(start, end);
    }
    // 0으로 초기화된 2X2 행렬 만들기
    const adjMatrix = Array.from({length:max+1} , () => Array.from({length : max+1}, () => 0))
  
    // 생성된 0 행렬에 간선 채우기
    for (let [start, end, type] of edges) {
      if (type === 'directed'){
        adjMatrix[start][end] = 1;
      }
      if (type == 'undirected'){
        adjMatrix[start][end] = 1;
        adjMatrix[end][start] = 1;
      }
    }
    return adjMatrix;
  }