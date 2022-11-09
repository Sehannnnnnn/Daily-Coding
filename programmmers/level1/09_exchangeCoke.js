function solution(a, b, n) {
    var answer = 0;
    while (true) {
        console.log(n, answer);
        if (parseInt(n/a) < 1) return answer;
        answer += parseInt(n/a)*b;
        n = parseInt(n/a)*b + (n%a);
    }
}

console.log(solution(3,2,20));

//3 2 20
//20 / 3 = 6*2 => 12+2 = 14;