// power
// 문제
// 두 수를 입력받아 거듭제곱을 리턴해야 합니다.

// 입력
// 인자 1: base
// number 타입의 자연수 (base >= 2)
// 인자 2: exponent
// number 타입의 정수 (exponent >= 0)
// 출력
// number 타입을 리턴해야 합니다.
// 실제 계산 결과를 94,906,249로 나눈 나머지를 리턴해야 합니다.
// 주의사항
// Math.pow, 거듭제곱 연산자 사용은 금지됩니다.
// 시간복잡도 O(logN)을 만족해야 합니다.
// 나머지를 구하는 이유는 계산 결과가 컴퓨터로 나타낼 수 있는 수의 범위를 넘을 수 있기 때문입니다. 하지만 모든 연산이 끝난 뒤에 그 결과를 94,906,249로 나누려고 해서는 안 됩니다. 연산 중간에도 이 범위를 넘을 수 있기 때문에, 연산을 할 때마다 나머지를 구하고 그 결과에 연산을 이어가시기 바랍니다.

//2진수 변환 활용
function power (base, exponent) {
    // todo: 여기에 코드를 작성합니다.
    let answer = 1;
    let binary = exponent.toString(2);
    let i = binary.length - 1;
    console.log(binary);
    for (let j = 1; j<=binary.length; j++) {
        if (binary[i] === '1') {
            answer = (answer * base) % 94906249
        }
        console.log('j:', j,' i:', binary[i],' ', base, answer)
        base = square(base);
        i--;
    }
    return answer;
}

function square (num) {
    return (num*num)%94906249;
}

// power(3, 40);

//분할 정복 algorithm 정석
function power(base, exponent) {
    if (exponent === 0) return 1;
    if (exponent % 2 === 0) {
        let byTwo = power(base, exponent/2)%94906249
        return (byTwo * byTwo)%94906249
    }
    else {
        let byTwoPlusOne = power(base, (exponent-1)/2)%94906249
        return (base * (byTwoPlusOne * byTwoPlusOne)%94906249)%94906249
    }
}

console.log(power(3, 20))