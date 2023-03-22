function solution(dots, lines) {
    let maxLineCount = lines.length;
    console.log(maxLineCount);
    let lineCount = 1;
    lines.sort((a,b) => a-b);
    let lineUse = [lines.pop()];
    while (lineCount <= maxLineCount) {
        console.log('사용할 선분: ', lineUse, '선분 개수: ', lineCount);
        if (isPossible(lineUse, dots)) {
            return lineCount;
        }
        lineCount++;
        lineUse.push(lines.pop());
    }

    function isPossible(lineUse, dots) {
        let [start_d, end_d] = [dots[0], dots[dots.length - 1]];
        //line 중 가장 큰 놈을 최적에 장소에 배치
        for (let line of lineUse) {
            let maxCount = 0;
            let maxIdx = start_d;
            //선분을 옮겨가며 많은 가장 많은 점을 커버할 때를 체크함
            for (let i = start_d; i <= end_d - line; i++) {
                let count = 0;
                dots.forEach((dot) => {
                    if (dot >= i && dot <= i + line) {
                        count++;
                    }
                })
                if (maxCount < count) {
                    maxCount = count;
                    maxIdx = i;
                }
            }
            console.log(
                '선분 길이:', line,
                '선분이 커버하는 접점의 수: ', maxCount,
                '선분의 시작위치: ', maxIdx,
                '선분의 끝위치: ', maxIdx + line
                );
            console.log('-----')
            dots = dots.filter((dot) => dot < maxIdx || dot > maxIdx + line);
            if (dots.length == 0) return true;
            start_d = dots[0]
            end_d = dots[dots.length - 1];
            console.log('남은 점: ',dots)
        }
        return false;
    }
    return -1;
}

// console.log(solution([1, 5, 8], [1, 3, 4, 6]))
  console.log(solution([1,3,4,6,7,10], [2,2,2,2]))
//   console.log(solution([1,5,8], [1,3,4,6]))