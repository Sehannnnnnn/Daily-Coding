
function connectedVertices(edges) {
    // TODO: 여기에 코드를 작성합니다.
      //인접행렬
      let checkArr = new Array(edges.length).fill(false);
      let queue = [];
      let count = 0;
      
      let i = 0;
      for (let edge of edges) {
        if (checkArr[i] == false) {
          queue.push(edge); 
          checkArr[i] = true;
          while (queue.length > 0) {
            let start = queue.shift();
            for (let j = i+1; j<edges.length; j++) {
              //이미 방문한 적이 있는 노드
              if (checkArr[j] == false || start[0] == edges[j][0] || start[1] == edges[j][0] || start[0] == edges[j][1] || start[1] == edges[j][1]) {
                checkArr[j] = true;
                queue.push(edges[j])
              }
            }
          }
          count ++;
        }
        i++;
      }
      return count;
    }