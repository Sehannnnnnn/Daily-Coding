// 문제
// 수(num)를 입력받아 1부터 num까지의 합을 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 정수 (num >= 0)
// 출력
// number 타입을 리턴해야 합니다.
// 1 + 2 + ... + num
// 주의 사항
// 함수 sumTo는 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용은 금지됩니다.
// n * (n + 1) / 2 와 같은 공식의 사용은 금지됩니다.
// 음수 입력은 들어오지 않습니다.

function sumTo(num) {
    // TODO: 여기에 코드를 작성합니다.
    // 별도의 최적화 기법(memoization)은 금지됩니다.
    if (num == 0) return 0;
    return sumTo(num-1) + num;
  }
  