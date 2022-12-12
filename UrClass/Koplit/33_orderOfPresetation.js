// orderOfPresentation
// 문제
// 말썽꾸러기 김코딩은 오늘도 장난을 치다가 조별 발표 순서가 담긴 통을 쏟고 말았습니다.

// 선생님께서는 미리 모든 발표 순서의 경우의 수를 저장해 놓았지만 김코딩의 버릇을 고치기 위해 문제를 내겠다고 말씀하셨습니다.

// 김코딩은 모든 조별 발표 순서에 대한 경우의 수를 차례대로 구한 뒤 발표 순서를 말하면 이 발표 순서가 몇 번째 경우의 수인지를 대답해야 합니다.

// 총 조의 수 N과 선생님이 말씀하시는 발표 순서 k가 주어질 때, 김코딩이 정답을 말 할 수 있게 올바른 리턴 값을 구하세요.

// 모든 경우의 수가 담긴 배열은 번호가 작을수록 앞에 위치한다고 가정합니다.
// ex) N = 3일경우, [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

function orderOfPresentation (N, K) {
    // TODO: 여기에 코드를 작성합니다.
    let nums = Array.from({length: N}, (v,i) => i+1)
    let addition = factorial(N);
    let count = 0;
    while (!isOrdered(K)) {
        addition /= N--;
        let ele = K.shift();
        let idx = nums.indexOf(ele);
        nums = [...nums.slice(0, idx), ...nums.slice(idx+1)];
        // console.log(K,ele, idx)
        count += idx * addition;
        // console.log(count, addition)
    }
    return count
}

function isOrdered (arr) {
  if (arr.length == 1) return true;
  for (let i = 1; i<arr.length; i++) {
    if (arr[i] < arr[i-1]) return false;
  }
  return true;
}

function factorial (n) {
  let a = 1;
  for (let i = 1; i<=n; i++) {
    a *= i
  }
  return a;
}
