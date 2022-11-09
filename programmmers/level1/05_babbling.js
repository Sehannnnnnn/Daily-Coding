function solution(babbling) {
    var answer = 0;
    let possible = ['aya', 'ye', 'woo','ma'];
    let impossible = ['ayaaya', 'yeye', 'woowoo', 'mama']
    //babbling 순회
    // => 한 단어에 앞에서 부타, aya, ye, woo, ma 지움 -> 안지워지면 return false;
    // false 면 count 하지 않음
    for (let bab of babbling) {
        let noDouble = true;
        for (let cannot of impossible) {
            if (bab.indexOf(cannot) >= 0) {
                noDouble = false;
                break;
            }
        }
        if (noDouble) {
            for (let can of possible) {
                while (true) {
                    if (bab.indexOf(can) == -1) break;
                    bab = bab.replace(can, "");
                }
            }
        }
        console.log(bab);
        if (bab.length == 0) answer++;
    }
    
    return answer;
}
let a = solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]);
console.log(a);