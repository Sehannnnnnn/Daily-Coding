function solution(price, money, count) {
    var totalmoney = price * ((1+count)*count/2)
    return money - totalmoney >= 0 ?  0 : totalmoney - money
}