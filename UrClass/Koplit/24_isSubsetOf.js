// isSubsetOf
// 문제
// 두 개의 배열(base, sample)을 입력받아 sample이 base의 부분집합인지 여부를 리턴해야 합니다.

// 입력
// 인자 1 : base
// number 타입을 요소로 갖는 임의의 배열
// base.length는 100 이하
// 인자 2 : sample
// number 타입을 요소로 갖는 임의의 배열
// sample.length는 100 이하
// 출력
// boolean 타입을 리턴해야 합니다.
// 주의사항
// base, sample 내에 중복되는 요소는 없다고 가정합니다.

const isSubsetOf = function (base, sample) {
    // TODO: 여기에 코드를 작성합니다.
    let baseMap = new Map();
    for (let i = 0; i<base.length; i++) {
      baseMap.set(base[i], 1);
    }
    for (let ele of sample) {
        if (baseMap.get(ele) === undefined) return false;
    }
    return true;
  };
  
  console.log(isSubsetOf([1,2,3,4,5],[1,5]))