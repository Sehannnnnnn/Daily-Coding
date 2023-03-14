function solution(maps) {
    let width = maps[0].length, height = maps.length;
    let start = [];
    let exit = [];
    let lever = [];
    //출발점과 
    for (let i = 0; i<maps.length; i++) {
    
      let line = maps[i].split('');
      if (line.includes('S')) {
        start = [line.indexOf('S'), i];
      }
      if (line.includes('E')) {
        exit = [line.indexOf('E'), i];
      }
      if (line.includes('L')) {
        lever = [line.indexOf('L'), i];
      }
      maps[i] = line;
    }
    
    console.log(start, exit, lever);
    
    const movement = [[0,1], [1,0], [-1,0], [0,-1]];
    const step = []
    
    function findWay(now, arrive, board, step) {
        console.log(now, step, board);
        step ++;
        board[now[1]][now[0]] = 'X'
        let nexts = [];
        movement.forEach((move) => {
            let next = [now[0] + move[0], now[1] + move[1]];
            if (next[0] >= 0 && next[0] < width && next[1] >= 0 && next[1] < height && board[next[1]][next[0]] !== 'X') {
                nexts.push(next);
            }
        })
        nexts.forEach((next) => {
            if (next[0] == arrive[0] && next[1] == arrive[1]) {
                console.log('도착!')
                return step;
            }
            findWay(next, arrive, board, step);
        })
    }
    findWay(start, lever, maps, 0)
  }
  
  solution(["SOOOL","XXXXO","OOOOO","OXXXX","OOOOE"]);