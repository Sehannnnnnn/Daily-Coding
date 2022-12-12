function partTimeJob(k) {
    // TODO: 여기에 코드를 작성하세요.
    let coins = [500, 100, 50, 10, 5, 1];
    let i = 0;
    let count = 0;
    while (k > 0) {
      if (k < coins[i]) {i++}
      else {
        k -= coins[i];
        count ++;
      }
    }
    return count;
  }
  
  const output1 = partTimeJob(4972);
  console.log(output1); // --> 8