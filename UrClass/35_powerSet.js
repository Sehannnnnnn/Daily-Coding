const powerSet = function (str) {
    // TODO: 여기에 코드를 작성합니다.
    let answerArr = [];
    str = [...new Set(str.split(''))];
    console.log(str);
    let num = 2**str.length;
    console.log(num)
    for (let i = 0; i<num; i++) {
      let newstr = ''
      let j = str.length-1;
      let demical = i.toString(2).padStart(str.length,'0');
      // demical += '0'.repeat(str.length - demical.length);
      // for(let zeroOrone of demical) {
      //    newstr += str[j].repeat(zeroOrone);
      //    j --;
      // }
      answerArr.push(newstr);
    }
    console.log(answerArr.sort((a,b) => b-a))
  };
  
  // const combination = (result,prev,left) => {
  //   if (left.length == 0) return prev;
  //   let ele = left.shift();
  //   result.push(combination([...prev, ele], left))
  //   result.push(combination([...prev], left));
  // }
  
  let output1 = powerSet('abc');
  console.log(output1); // ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']
  
  let output2 = powerSet('jjump');
  console.log(output2); // ['', 'j', 'jm', 'jmp', 'jmpu', 'jmu', 'jp', 'jpu', 'ju', 'm', 'mp', 'mpu', 'mu', 'p', 'pu', 'u']