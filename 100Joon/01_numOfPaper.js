const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/Users/gimsehan/Develop/Daily-Coding/100Joon/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const paper =  input.slice(1).map((row) => row.split(' '));

function solution (N, paper) {
    const record = {
        '1' : 0,
        '0' : 0,
        '-1' : 0
    }

    function checkPaper (n, paper) {
        let type = paper[0][0];
        for (let i = 0; i<n; i++) {
            for (let j = 0; j<n; j++) {
                if (paper[i][j] !== type) {
                    return false;
                }
            }
        }
        if (type == 1) record['1'] += 1;
        if (type == 0) record['0'] += 1;
        if (type == -1) record['-1'] += 1;
        return true;
    }

    function dividePaper (n, paper) {
        if (checkPaper(n, paper)) return;

        // 종이가 통과하지 못함
        let new_n = n/3;
        // if (n == 1) return paper;
        let new_paper = [];
        for (let i = 0; i<3; i++) {
            for (let j = 0; j<3; j++) {
                let small_paper = Array.from({length: new_n}, () => Array.from({length: new_n}, () => 0));
                for (let x=0; x<new_n; x++) {
                    for (let y=0; y<new_n; y++) {
                        small_paper[x][y] = paper[i*new_n+x][j*new_n+y];
                    }
                }
                new_paper.push(small_paper);
            }
        }

        new_paper.forEach((small_paper) => {
            dividePaper(new_n, small_paper);
        })
    }

    dividePaper(N, paper);

    console.log(record['-1'] + '\n' + record['0'] + '\n' + record['1'])
}


solution(N, paper);

//우수 정답
// const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
// let arr = require('fs').readFileSync(path).toString().trim().split('\n')
// let n = +arr.shift()
// arr = arr.map((s) => s.split(' '))
// let [a, b, c] = [0, 0, 0]

// go(0, 0, n)

// function go(y, x, n) {
//   let one = 0
//   let zero = 0
//   let mone = 0

//   for (let i = y; i < y + n; i++) {
//     for (let j = x; j < x + n; j++) {
//       if (arr[i][j] === '0') {
//         zero++
//       } else if (arr[i][j] === '1') {
//         one++
//       } else if (arr[i][j] === '-1') {
//         mone++
//       }
//     }
//   }

//   if (zero === n * n) {
//     b++
//   } else if (one === n * n) {
//     c++
//   } else if (mone === n * n) {
//     a++
//   } else {
//     go(y, x, parseInt(n / 3))
//     go(y, x + parseInt(n / 3), parseInt(n / 3))
//     go(y, x + parseInt(n / 3) * 2, parseInt(n / 3))
//     go(y + parseInt(n / 3), x, parseInt(n / 3))
//     go(y + parseInt(n / 3), x + parseInt(n / 3), parseInt(n / 3))
//     go(y + parseInt(n / 3), x + parseInt(n / 3) * 2, parseInt(n / 3))
//     go(y + parseInt(n / 3) * 2, x, parseInt(n / 3))
//     go(y + parseInt(n / 3) * 2, x + parseInt(n / 3), parseInt(n / 3))
//     go(y + parseInt(n / 3) * 2, x + parseInt(n / 3) * 2, parseInt(n / 3))
//   }
// }

// console.log(a)
// console.log(b)
// console.log(c)
