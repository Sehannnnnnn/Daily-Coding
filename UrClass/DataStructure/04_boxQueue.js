function paveBox(boxes) {
    // TODO: 여기에 코드를 작성합니다.
  
    //boxes 순회 하면서 -> boxes[i] -> box
    let maxOut = 0;
    let queue = [];
    boxes.forEach((box) => {
      if (queue.length == 0) {
        queue.push(box);
      }
      else {
        // 큐 안에 맨앞놈이 나보다 크다.. 
        if (box <= queue[0]) {
          queue.push(box);
        }
        //새로운 대기열이 생성되는 시점. -> 현재 큐에 몇명이 있는지를 기록해야합니다. -> maxOut에 
        else {
          queue = [];
          queue.push(box);
        }
      }
      maxOut = maxOut < queue.length ? queue.length : maxOut;
      console.log(queue, maxOut);
    })
    return maxOut;
  }
  
  const boxes = [5, 1, 4, 6,1,1,1,7,1,3,1,2,3,8,8,8,8,];
  const output = paveBox(boxes);
  console.log(output); // 3