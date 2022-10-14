// 문제
// 수를 입력받아 제곱근 값을 소수점 두 자리까지 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 정수 (num >= 2)
// 출력
// number 타입을 리턴해야 합니다.
// 최대 소수점 둘째 짜리까지 구합니다. (소수점 셋째 자리에서 반올림)
// 주의 사항
// Math.sqrt 사용은 금지됩니다.

function computeSquareRoot(num) {
    const diffs = [1, 0.1, 0.01, 0.001];
    let base = 1;
    for (let i = 0; i < diffs.length; i++) {
      while (base * base < num) {
        base = base + diffs[i];
      }
      
      if (base * base === num) {
        return base;
      } else {
        base = base - diffs[i];
      }
    }
    return Number(base.toFixed(2));
  }
  



output = computeSquareRoot(6);
console.log(output); // --> 2.45