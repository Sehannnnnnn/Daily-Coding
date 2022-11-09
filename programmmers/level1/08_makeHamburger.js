function solution(ingredient) {
    let answer = 0;
    let stack = [];
    ingredient.forEach((ele) => {
        stack.push(ele);
        [stack, answer] = burgerStack(stack, answer);
    })
    return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));

function burgerStack(arr, count) {
    console.log(arr, count);
    if (arr.length < 4) return [arr, count];
    let [a,b,c,d] = arr.slice(-4)
    if (a == 1 && b == 2 && c == 3 && d == 1) {
        arr.pop();
        arr.pop();
        arr.pop();
        arr.pop();
        count ++;
        return [arr, count];
    }
    return [arr, count];
}