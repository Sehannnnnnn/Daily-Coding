function solution(n) {
    let len = (n*(n+1))/2;
    const arr = Array.from({length: len}, () => 0);
    console.log(arr);
    let num = 1;
    let idx = 0;
    let jump = 1;
    
  
  const fillLeftside = (arr, idx, num, level, jump) => {
    if (level == 1) {
      arr[idx] = num;
      return arr;
    }
    for (let i = 1; i<level; i++) {
      arr[idx] = num;
      num++;
      idx = idx + jump;
      jump++;
      if (num > len) return arr;
    }
    return fillBottom(arr, idx, num, level, jump);
  }
  
  const fillBottom = (arr, idx, num, level, jump) => {
    for (let i = 1; i<level; i++){
      arr[idx] = num;
      idx++;
      num++;
      if (num > len) return arr;
    }
    return fillRightside(arr, idx, num, level, jump);
  }
  
  const fillRightside = (arr, idx, num, level, jump) => {
    for (let i = 1; i<level; i++) {
      arr[idx] = num;
      idx = idx - jump;
      jump--;
      num++;
      if (num > len) return arr;
    }
    jump ++;
    idx = idx + jump;
    return fillLeftside(arr, idx+jump, num, level-3, jump+1);   
  }
  return fillLeftside(arr, idx, num, n, jump);
}