function insertDash(str) {
    // TODO: 여기에 코드를 작성합니다.
    let numArr = str.split('').map(ele => +ele);
    let output = '';
    for (let i = 0; i<numArr.length; i++) {
      if (isOdd(numArr[i]) && isOdd(numArr[i+1]) && i < numArr.length-1) {
        output += numArr[i] + '-'
      }
      else {
        output += numArr[i] + '';
      }
    }
    console.log(output)
  }
  
  function isOdd(num) {
    return num % 2 == 0 ? false : true; 
  }

  insertDash('1456791')