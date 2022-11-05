// https://school.programmers.co.kr/learn/courses/30/lessons/86491?language=javascript

function solution(sizes) {
    var answer = 0;
    let a = 0; let b = 0;
    sizes.forEach((size) => {
        let largeSide = size[0] >= size[1] ? size[0] : size[1];
        let smallSide = size[0] < size[1] ? size[0] : size[1];
        if (largeSide > a) a = largeSide;
        if (smallSide > b) b = smallSide;
    })
    return a * b;
    return answer;
}