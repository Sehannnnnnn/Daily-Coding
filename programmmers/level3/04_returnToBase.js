function solution(n, roads, sources, destination) {
    //최단거리 기록 용 배열
    const lenArr = Array.from({length: n+1}, () => -1);
    
    //길이 있는지 확인 하기 위한 그래프
    const roadDict = {};
    for (let i = 1; i<n+1;i++) {
      roadDict[i] = [];
    }
    
    roads.forEach(([start, end]) => {
      roadDict[start].push(end);
      roadDict[end].push(start);
    });
    
    lenArr[destination] = 0;
    let step = 1;
    
    function BFS (starts, step) {
      let nexts = [];
      for (let start of starts) {
        for (let next of roadDict[start]) {
          //방문한적 없으면서 길이 있을 경우
          if (lenArr[next] < 0) {
            //거리를 기록하고
            lenArr[next] = step;
            nexts.push(next);
          } 
        } 
      }
      step ++;
      if (nexts.length == 0) return;
      return BFS(nexts, step);
    }
    
    BFS([destination], step);
    
    return sources.map((point) => lenArr[point]);
  }
  
  solution(5, [[1, 2], [1, 4], [2, 4], [2, 5], [4, 5]], [1, 3, 5], 5)