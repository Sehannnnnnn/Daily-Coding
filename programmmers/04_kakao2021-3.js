function solution(orders, course) {
    var answer = [];
    //orders 순회
    course.forEach(n => {
        const candidate = new Map;
        let max = 0;
        for (let order of orders) {
            const output = [];
            combination(n, [], order, output);
            output.forEach(comb => {
                if (candidate.has(comb)) {
                    candidate.set(comb, candidate.get(comb)+1);
                    if (candidate.get(comb) > max) max = candidate.get(comb);
                } else {
                    candidate.set(comb, 1);
                }
            })
        }
        let decision = [...candidate].filter(([comb, count]) => count == max).map(([menu, count]) => menu)
        answer.push(...decision);
    })
    console.log(answer.sort());
}
function combination (N, comb, rests, output) {
    if (rests.length == 0) {
        if (comb.length == N) return output.push(comb);
        return
    }
    const rest = rests.substr(1)
    combination(N, comb+rests[0], rest, output);
    combination(N, comb, rest, output);   
}

const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"]
const course = [2,3,4]

solution(orders,course);