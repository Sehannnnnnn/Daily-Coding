function movingStuff(stuff, limit) {
    // TODO: 여기에 코드를 작성합니다.
    let count = 0;
    stuff = stuff.sort((a,b) => a-b); //오름차순 정렬
    // [50,50,70,80], 100
    while (stuff.length > 0) {
      let box = [];
      let heavy = stuff.pop();
      let l = limit;
      l -= heavy;
      box.push(heavy);
      if (l >= stuff[0]) {
        let light = stuff.shift();
        box.push(light);
      }
      console.log(box);
      count ++;
    }
    return count;
  }
  let output = movingStuff([70, 50, 80, 50], 100);
  console.log(output); // 3
  
  output = movingStuff([42, 25, 60, 73, 103, 167], 187);
  console.log(output); // 4