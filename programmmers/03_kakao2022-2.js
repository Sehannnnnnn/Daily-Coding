//[문제 링크] https://school.programmers.co.kr/learn/courses/30/lessons/118667
//투포인터 활용 문제

function solution(queue1, queue2) {
    let long_queue = [...queue1, ...queue2];
    let maxCount = long_queue.length*2;
    let start = 0;
    let end = queue1.length;
    
    const sum = (arr) => arr.reduce((a,b) => a+b);
    let totalNum = sum(long_queue.slice(start, end));
    let goalNum = sum(long_queue)/2;
    let count = 0;
    
    while(count <= maxCount) {
        if (totalNum < goalNum) {
            totalNum += long_queue[end];
            end ++;
        }
        else if (totalNum > goalNum) {
            totalNum -= long_queue[start];
            start++;
        }
        else if (totalNum === goalNum){
            return count;
        }
        count++;
    }
   return -1;
}