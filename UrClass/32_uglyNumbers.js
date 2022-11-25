const uglyNumbers = function (n) {
    // TODO: 여기에 코드를 작성합니다.
    let countArr = [1];
    let checkArr = [false,true];
    let i = 2;
    while (countArr.length<n) {
      if (checkArr[i/2] || checkArr[i/3] || checkArr[i/5]) {
        countArr.push(i);
        checkArr.push(true);
      }
      else {
        checkArr.push(false);
      }
      i++
    }
    console.log(countArr)
    return countArr.pop();
  };

  console.log(uglyNumbers(505))