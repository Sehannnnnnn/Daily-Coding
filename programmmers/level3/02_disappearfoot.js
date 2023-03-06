// function solution_(board, aloc, bloc) {
//   let nexts = [];
//   let moves = [[0,1], [0,-1], [1,0], [-1,0]];
  
//   for (let move of moves) {
//     nexts.push([aloc[0]+move[0], aloc[1]+move[1]]);
//   }
  
//   //a가 이동 할 수 있는 곳
//   nexts = nexts.filter(e => e[0] >= 0 && e[0] < board.length && e[1] >= 0 && e[1] < board[0].length && board[e[0]][e[1]] == 1);
  
//   //만약 a가 갈 수 있는 곳이 한군데도 없다면 즉시 함수를 종료
//   if(board[aloc[0]][aloc[1]] == 1 || nexts.length == 0) return {Fwin: false, cnt: 0};
  
  
//   //아직 a에 현위치를 지정하지 않았음. 
//   borad[aloc[0]][aloc[1]] = 0;
//   let results = [];
  
//   //result에 push함, b의 이동을 지시하면서
//   //a가 이동할 수 있는 경우에 수들을 bloc 매개변수로 전달
//   for (let next of nexts) {
//     results.push(solution_åå(board, bloc, next))
//   }
  
//   board[aloc[0]][aloc[1]] = 1;
  
//   //만약 현재 a나 b 중 다음으로 갈 수 있는 next 가 없다면, 
  
//   let flag = false;
//   let max = 0;
//   let min = 100000;
//   for (let result of results) {
//     flag = flag || !result.Fwin;
//     if (!result.Fwin) {
//       min = Math.min(min, result.cnt);
//     } else {
//       max = Math.max(max, result.cnt);
//     }
//   }
  
//   if (flag) {
//     return {Fwin: true, cnt: min+1};
//   }
  
//   else {
//     return {Fwin:false, cnt: max+1};
//   }
// }

// function solution(board, aloc, bloc) {
//   return solution_(board, aloc, bloc).cnt;
// }
let count = 0;
function solution_(board, aloc, bloc, count = 0) {
    console.log(board, aloc, bloc, count);
    let nexts = [];
    let moves = [[0,1],[0,-1],[1,0],[-1,0]];
    
    for (let move of moves) {
        nexts.push([aloc[0]+move[0],aloc[1]+move[1]])
    }
    nexts = nexts.filter(e => e[0] >= 0 && e[0] < board.length && e[1] >= 0 
                         && e[1] < board[0].length && board[e[0]][e[1]] == 1);
    console.log(nexts)
    if(board[aloc[0]][aloc[1]] == 0 || nexts.length == 0) return {Fwin:false,cnt:0};

    board[aloc[0]][aloc[1]] = 0;
    let results = [];
  
    count ++;
    for (let next of nexts) {
        results.push(solution_(board,bloc,next,count));
    }
  
    // count ++;
    // console.log(count, board, results);
    board[aloc[0]][aloc[1]] = 1;

    let flag = false;
    let max = 0;
    let min = 100000;
    for (let result of results) {
        flag = flag || !result.Fwin;
        if (!result.Fwin) min = Math.min(min, result.cnt)
        else max = Math.max(max, result.cnt);
    }

    if (flag){
        // console.log(board,aloc,bloc,nexts,{Fwin:true, cnt:min+1}) 
        return {Fwin:true, cnt:min+1}

    }
    else {
        // console.log(board,aloc,bloc,nexts,{Fwin:false, cnt:max+1})
        return {Fwin:false, cnt:max+1}
    }
}

function solution(board, aloc, bloc) {
    return solution_(board, aloc, bloc).cnt;
}

solution([[1,1],[1,1]], [1,0], [1,1])

// solution([[1,1,1],[1,0,1],[1,1,1]], [1,0], [1,2])