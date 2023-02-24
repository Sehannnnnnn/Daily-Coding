function solution(users, emoticons) {
    let dc_rate = [10, 20, 30, 40];
    const min_dc = users.map(([r,p]) => r).sort((a,b) => a-b)[0];
    dc_rate = dc_rate.filter((r) => r >= min_dc);
    
    const arr = [];
    function dfs (rates, n, permu) {
        if (n == 0) return arr.push(permu);
        rates.forEach((rate) => {
            dfs(rates, n-1, [...permu, rate])
        })
    }
    //할인율 조합을 구함
    dfs(dc_rate, emoticons.length, []);
    console.log(arr);
    let max_case = [0,0];
    for (let r = 0; r<arr.length; r++) {
        let c = [0,0];
        users.forEach((user) => {
            let u = userPurchase(emoticons, arr[r], user);
            c[0] = c[0] + u[0];
            c[1] = c[1] + u[1];
        })
        console.log(c);
        if (max_case[0] < c[0]) max_case = c;
        if (max_case[0] == c[0] && max_case[1] < c[1]) max_case = c;
        console.log('mc: ',max_case);
    }
    return max_case;
}


function calDiscount(price, rate) {
    switch(rate) {
        case 10: return price*0.9;
        case 20: return price*0.8;
        case 30: return price*0.7;
        case 40: return price*0.6;
    }
}

function userPurchase (prices, rates, user) {
    let t_money = 0;
    for (let i = 0; i<prices.length; i++) {
        if (rates[i] >= user[0]) {
            t_money += calDiscount(prices[i], rates[i])
        }
    }
    if (t_money >= user[1]) return [1, 0];
    else return [0, t_money];
}

console.log(solution([[40, 2900], [23, 10000], [11, 5200], [5, 5900], [40, 3100], [27, 9200], [32, 6900]], [1300, 1500, 1600, 4900]))