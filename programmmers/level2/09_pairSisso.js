
//조합을 활용한 문제 => 시간초과
// function solution (weights) {
//     let count = 0;
//     const cases = [];
//     const nCr = (comb,rest,r) => {
//         if (comb.length == r) return cases.push(comb);
//         rest.forEach((ele, idx) => {
//             let n_rest = rest.slice(idx+1);
//             nCr([...comb, ele], n_rest, r)
//         })
//     }
//     nCr([], weights, 2);
//     console.log(cases);
    
//     for (let c of cases) {
//         let arr = [4*c[0], 3*c[0], 2*c[0], 4*c[1], 3*c[1], 2*c[1]];
//         let set = new Set(arr);
//         if (set.size < 6) count++;
//     }
//     return count;
// }

//그냥 단순 2중포문 시간초과


function solution (weights) {
    let count = 0;
    weights = weights.sort((a,b) => a-b)
    const map = new Map();

    for (let weight of weights) {
        if (map.has(weight)) map.set(weight, map.get(weight) + 1);
        else (map.set(weight, 1));
    }

    console.log(map);
    const rates = [1, 2, 3/2, 4/3]
    for (let weight of weights) {
        map.set(weight, map.get(weight) - 1);
        for (let rate of rates) {
            let w = rate*weight;
            if (map.get(w) > 0) {
                console.log(weight, rate, w, map.get(w));
                count += map.get(w);
            }
        }
    }

    console.log(count);
}

solution([100,100,140,140,120,50]);