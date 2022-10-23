function solution(arr)
{
    var answer = [];
    let prev = arr[0];
    answer.push(prev);
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    for (let i = 1; i<arr.length; i++) {
        if (prev !== arr[i]) {
            answer.push(arr[i]);
            prev = arr[i]
        }
    }
    
    return answer;
}