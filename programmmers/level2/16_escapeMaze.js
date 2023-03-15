function solution(maps) {
    let width = maps[0].length, height = maps.length;
    let start = [];
    let exit = [];
    let lever = [];
    //start, lever, exit 좌표 구하기
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
    
    //방문 기록용 2차원 배열 생성
    let visit = Array.from({length: height}, () => Array.from({length: width}, () => true));
    const movement = [[0,1], [1,0], [-1,0], [0,-1]];

    //BFS 방식 탐색
    function findWay(nows, arrive, board, step) {
        let nexts = [];
        for (let now of nows) {
            if (now[0] == arrive[0] && now[1] == arrive[1]) {
                return {arrives: true, step: step};
            }
            movement.forEach((move) => {
                let next = [now[0] + move[0], now[1] + move[1]];
                //맵 내에 있는 좌표이면서
                if ((next[0] >= 0 && next[0] < width) && (next[1] >= 0 && next[1] < height)) {
                    //방문한적 없고 벽이 아닐때
                    if (board[next[1]][next[0]] !== 'X' && visit[next[1]][next[0]]){
                        //방문 처리
                        visit[[next[1]]][next[0]] = false;
                        nexts.push(next);
                    }
                }
            })
        }
        if (nexts.length === 0) return {arrives: false, step: -1};
        // 재귀호출
        return findWay(nexts, arrive, board, step+1);
    }

    //레버찾기
    visit[start[1]][start[0]] == false;
    const findLever = findWay([start], lever, maps, 0);
    //레버 못찾으면
    if (!findLever.arrives) return -1;
    //방문 기록 배열 초기화
    visit = Array.from({length: height}, () => Array.from({length: width}, () => true));

    //출구 찾기
    visit[lever[1]][lever[0]] == false;
    const findExit = findWay([lever], exit, maps, 0);

    if (!findExit.arrives) {
        return -1;
    }
    else {return findLever.step + findExit.step};
  }
  
  console.log(solution(["SOOOL","XXXXO","OOOOO","OXXXX","OOOOE"]));