
// tiling
// 문제
// 세로 길이 2, 가로 길이 n인 2 x n 보드가 있습니다. 2 x 1 크기의 타일을 가지고 이 보드를 채우는 모든 경우의 수를 리턴해야 합니다.

// 입력
// 인자 1 : n
// number 타입의 1 이상의 자연수
// 출력
// number 타입을 리턴해야 합니다.
// 주의사항
// 타일을 가로, 세로 어느 방향으로 놓아도 상관없습니다. (입출력 예시 참고)

// let tiling = function (n) {
//     let answer = 0;
//     for (let i = 0; i<=n; i++) {
//         answer += nCr(n,i);
//         n--;
//     }
//     return answer;
// } 


function nCr (n, r) {
    console.log('nCr 실행 n:',n, ' r:',r)
    if (r > n) return 0;
    if (r == 0 || n == r) return 1;
    let a = 1; 
    let b = 1;
    for (let i = 0; i<r; i++) {
        a *= (n-i)
    }

    for (let i = 1; i<=r; i++) {
        b *= i;
    }
    console.log(a/b);
    return a/b;
}

console.log(tiling(6));