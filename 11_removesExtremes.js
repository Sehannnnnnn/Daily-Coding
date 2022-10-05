// 문제
// 문자열을 요소로 갖는 배열을 입력받아 가장 짧은 문자열과 가장 긴 문자열을 제거한 배열을 리턴해야 합니다.

// 주의 사항
// 가장 짧은 문자열의 길이와 가장 긴 문자열의 길이가 같은 경우는 없습니다.
// 가장 짧은 문자열 또는 가장 긴 문자열이 다수일 경우, 나중에 위치한 문자열을 제거합니다.




function removeExtremes(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let maxIdx = 0;
    let minIdx = 0;
    let maxlen = 0;
    let minlen = 999999999;
    arr.forEach((str,idx,arr) => {
      if (str.length <= minlen) {
        minlen = str.length;
        minIdx = idx;
      }
  
      if (str.length > maxlen) {
        maxlen = str.length;
        maxIdx = idx;
      }
    })
    console.log(maxIdx, minIdx);
    return arr.filter((x,idx,) => !(idx == minIdx || idx == maxIdx))
  }

let output = removeExtremes(['a', 'b', 'c', 'def']);
console.log(output); // --> ['a', 'b']

output = removeExtremes(['where', 'is', 'the', 'longest', 'word']);
console.log(output); // --> ['where', 'the', 'word',]