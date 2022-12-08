function solution(k, tangerine) {
    //개수별로 정리
    const countObj = {};
    tangerine.forEach((weight) => {
        let count = countObj[weight] ?? 0;
        countObj[weight] = count+1;
    })
    
    let countStack = Object.entries(countObj).sort((a,b) => a[1]-b[1]);
    
    let answer = 0;
    while(k > 0) {
        let [weight, count] = countStack.pop();
        answer ++;
        k = k-count;
    }
    return answer;
}