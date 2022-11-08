//시간초과 코드
// function solution(X, Y) {
//     var answer = '';
//     let long = X.length >= Y.length ? String(X) : String(Y);
//     let short = X.length < Y.length ? String(X) : String(Y);
//     let dict = new Map();
//     [...short].forEach(str => {
//         if (long.indexOf(str) > -1) {
//             long = long.replace(str, '');
//             let count = dict.get(str);
//             if (count === undefined) {
//                 dict.set(str, 1); 
//             } else {
//                 dict.set(str, count+1);
//             }
//         }
//     })
//     let arr = ['9','8','7','6','5','4','3','2','1','0']
//     arr.forEach(num => {
//         if (dict.get(num) != undefined) {
//             answer += num.repeat(dict.get(num));
//         }
//     })
//     if (answer.length == 0) return '-1';
//     if (Number(answer) == 0) return '0';
//     return answer;
// }

function solution(X,Y) {
    let answer = '';
    let xArr = Array.from({length: 10}, (v,i) => 0);
    let yArr = Array.from({length: 10}, (v,i) => 0);
    let longlen = Math.max(X.length, Y.length);

    for (let i = 0; i<longlen; i++) {
        xstr = X[i];
        ystr = Y[i];
        if (xstr != undefined && ystr != undefined) {
            xArr[xstr] += 1;
            yArr[ystr] += 1;
        } else if (ystr == undefined) {
            xArr[xstr] += 1;
        } else if (xstr == undefined) {
            yArr[ystr] += 1;
        }
    }
    console.log(xArr, yArr)
    for (let j = 9; j>=0; j--) {
        if (xArr[j] == 0 || yArr[j] == 0) continue;
        let couple = Math.min(xArr[j], yArr[j]);
        answer += String(j).repeat(couple);
    }
    console.log(answer);
    if (answer == '') return -1;
    if (answer[0] == 0) return 0;
    return answer;
}

console.log(solution('002', '100'))