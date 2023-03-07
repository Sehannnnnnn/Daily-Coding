function solution(n) {
    const board = [];
    for (let i = 0; i < n; i++) {
      board.push([]);
      for (let j = 0; j < n; j++) {
        board[i].push('.');
      }
    }
  
    const result = [];
    backtrack(board, 0, result);
    return result.length;
}
  
function backtrack(board, col, result) {
    if (col === board.length) {
        result.push(board.map(row => row.join('')));
        return;
    }

    for (let row = 0; row < board.length; row++) {
        if (isValid(board, row, col)) {
            board[row][col] = 'Q';
            backtrack(board, col + 1, result);
            board[row][col] = '.';
        }
    }
}

function isValid(board, row, col) {
    //자신과 같은 가로줄에 Q가 없는지
    for (let i = 0; i < col; i++) {
        if (board[row][i] === 'Q') {
            return false;
        }
    }

    //대각 왼쪽 탐색
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 'Q') {
            return false;
        }
    }

    //대각 오른쪽 탐색
    for (let i = row, j = col; i < board.length && j >= 0; i++, j--) {
        if (board[i][j] === 'Q') {
            return false;
        }
    }

    return true;
}