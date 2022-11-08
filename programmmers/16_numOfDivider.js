function solution(left, right) {
    var answer = 0;
    for (let i = left; i<=right; i++) {
        if (isSquareNum(i)) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}

function isSquareNum(num) {
    let n = Math.sqrt(num);
    if (parseInt(n) === n) return true;
    return false;
}