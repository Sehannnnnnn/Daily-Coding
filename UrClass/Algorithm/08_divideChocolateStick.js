//최대 공약수의 약수
//유클리드호제법 사용
function divideChocolateStick(M, N) {
    // TODO: 여기에 코드를 작성합니다.
    let big = M > N ? M : N;
    let small = M > N ? N : M;
    
    function getGcd(a, b) {
      const remainder = a % b;  // 1번
      if (remainder === 0) return b;  // 2번
      return getGcd(b, remainder);  // 3번
    }
    
    let gcd = getGcd(big, small);
    let divisions = [];
    let bigdiv = [];
    let smalldiv = [];
    for (let i = 1; i <= Math.sqrt(gcd); i++) {
      if (gcd % i == 0) {
        let r = gcd / i;
        if (r != i) {
          smalldiv.push(i)
          bigdiv.push(r)
        }
        else {smalldiv.push(r)}
      }
    }
    divisions = [...smalldiv, ...bigdiv.reverse()]
    return divisions.map((di) => [di, M/di, N/di])
  }
  
  let M = 1000000;
  let N = 1000000;
  let output = divideChocolateStick(M, N);
  console.log(output);