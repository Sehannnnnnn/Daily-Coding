function solution(babbling) {
    var answer = 0;
    const WORD_CAN = ['aya', 'ye', 'woo', 'ma'];
    // const WORD_CANNOT = ['ayaaya', 'yeye', 'woowoo', 'mama']
    for (let i = 0; i<babbling.length; i++) {
        let babb = babbling[i];
        let stack = '';
        let prevword = ''; //이전 단어
        let possible = true;
        for (let j = 0; j<babb.length; j++) {
            stack += babb[j];
            console.log(stack);
            if (WORD_CAN.includes(stack)) {
                if (prevword == stack) {
                    possible = false;
                    break;
                } else { 
                    prevword = stack;
                    stack = '';
                }
            }
        }
        if (stack.length > 0) possible = false;
        if (possible) answer += 1;
    }
    return answer;
}

console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));