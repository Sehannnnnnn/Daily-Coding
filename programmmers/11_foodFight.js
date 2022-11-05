function solution(food) {
    var mine = '';
    var other = '';
    for (let i = 1; i<food.length; i++) {
        let amount = food[i];
        if (amount % 2 == 1) amount = amount - 1;
        mine = mine + (i+'').repeat(amount/2);
        other = (i+'').repeat(amount/2) + other;
    }
    return mine+'0'+other;
}