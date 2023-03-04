function solution (queue1, queue2) {
    const queue = [...queue1, ...queue2];
    
    const totalSum = queue.reduce((prev, curr) => prev+curr);
    const goalSum = totalSum/2;
    console.log(queue, totalSum);
    
    //총합이 홀수 인 경우 return -1
    if (goalSum !== parseInt(goalSum)) return -1;
    
    let minTurn = queue.length;
    let x = 0; 
    let y = queue1.length;
    
    for (let i = 0; i<queue.length; i++) {
      for (let j = i+1; j<queue.length; j++) {
        if (sumofQueueRange(queue, i,j)) {
            console.log(i,j);
            minTurn = i+Math.abs(j-y) < minTurn ? i+Math.abs(j-y) : minTurn;
        }
      }
    }
    if (minTurn == queue.length) return -1;
    return minTurn;
  }
  
  function sumofQueueRange (queue, x, y) {
    let sum1 = 0;
    let sum2 = 0;
    queue.forEach((num, idx) => {
      if (idx >= x && idx < y) {
        sum1 += num;
      }
      else {
        sum2 += num;
      }
    })
    if (sum1 == sum2) return true;
    else false;
  }
  solution([1,1],[1,5]);


  // function solution(queue1, queue2) {
//     let long_queue = [...queue1, ...queue2];
//     let maxCount = long_queue.length*2;
//     let start = 0;
//     let end = queue1.length;
    
//     const sum = (arr) => arr.reduce((a,b) => a+b);
//     let totalNum = sum(long_queue.slice(start, end));
//     let goalNum = sum(long_queue)/2;
//     let count = 0;
    
//     while(count <= maxCount) {
//         if (totalNum < goalNum) {
//             totalNum += long_queue[end];
//             end ++;
//         }
//         else if (totalNum > goalNum) {
//             totalNum -= long_queue[start];
//             start++;
//         }
//         else if (totalNum === goalNum){
//             return count;
//         }
//         count++;
//     }
//    return -1;
// }