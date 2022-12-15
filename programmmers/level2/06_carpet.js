function solution(brown, yellow) {
    let possible = [];
    for (let i = 1; i<=Math.sqrt(yellow); i++) {
      if (yellow % i === 0) {
        possible.push([yellow/i, i])
      }
    }
    for (let [x,y] of possible) {
      let [x1, y1] = [x+2, y+2]
      if ((brown+yellow) / x1 === y1) {
        return [x1, y1]
      }
    }
  }