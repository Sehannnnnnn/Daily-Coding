function solution(board) {
    var answer = 0;
    for (let i = 0; i<board.length; i++) {
        for (let j = 0; j<board.length; j++) {
            if (board[i][j] == 1) {
                dangerzone(i-1, j-1, board);
                dangerzone(i, j-1, board);
                dangerzone(i+1, j-1, board);
                dangerzone(i-1, j, board);
                dangerzone(i+1, j, board);
                dangerzone(i-1, j+1, board);
                dangerzone(i, j+1, board);
                dangerzone(i+1, j+1, board);
                console.log(board);
            }
        } 
    }
    
    board.forEach((arr) => {
        arr.forEach((ele) => {
            if (ele == 0) answer ++;
        })
    })
    console.log(answer);
    return answer;
}

function dangerzone (i,j, board) {
    if (i<0 || i>board.length || j<0 || j>board.length) {
        return
    }
    if (board[i][j] !== 0) return
    else return board[i][j] = 2;
}

const zone = [[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]];
solution(zone)