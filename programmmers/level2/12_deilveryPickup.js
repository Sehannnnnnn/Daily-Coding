function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    while (true) {
      deliveries = clear0end(deliveries);
      pickups = clear0end(pickups);
      
      let d_len = deliveries.length
      let p_len = pickups.length
      let point = d_len > p_len ? d_len : p_len;
      if (d_len == 0 && p_len == 0) {
        break;
      }
      answer += point;
      let d_boxes = 0; let p_boxes = 0;
      
      //배달 보내기
      while(d_boxes < cap) {
        if (deliveries.length == 0) break;
        d_boxes += deliveries.pop();
        if (d_boxes > cap) {
          deliveries.push(d_boxes-cap)
        }
      }
      //수거하기
      while(p_boxes < cap) {
        if (pickups.length == 0) break;
        p_boxes += pickups.pop();
        if (p_boxes > cap) {
          pickups.push(p_boxes-cap);
        }
      }
    }
    return answer*2;
  }
  
  function clear0end (arr) {
    if (arr.length == 0) return arr;
    for (let i = arr.length-1; i>=0; i--) {
      if (arr[i] == 0) arr.pop();
      if (arr[i] > 0) break;
    }
    return arr;
  }
  
  
  solution(4, 5, [0],	[0])
  