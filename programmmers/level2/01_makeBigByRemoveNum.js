
// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42883?language=javascript

//1차시도
function bigNumberByRemoveOne(number, k) {
    if (k == 0) return number;
    const arr = new Array(number.length).fill(number).map((num,idx) => {
      return parseInt(num.substring(0,idx)+num.substring(idx+1))
    })
    let bigNum = String(Math.max(...arr));
    return bigNumberByRemoveOne(bigNum, k-1);
  }
  
  bigNumberByRemoveOne('707',1)
  bigNumberByRemoveOne('1231234',3)
  bigNumberByRemoveOne('4177252841',4)