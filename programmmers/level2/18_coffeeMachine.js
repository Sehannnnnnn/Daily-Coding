
class MinHeap {
    constructor () {
      this.heap = [];
    }
    length () {
      return this.heap.length;
    }
    swap(a,b) {
      [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    
    push(newValue) {
      const heap = this.heap;
      heap.push(newValue);
      let idx = heap.length-1, parent = Math.floor((idx-1)/2);
      while (idx > 0 && heap[parent][0] > heap[idx][0]) {
        this.swap(idx, parent);
        idx = parent; 
        parent = Math.floor((idx-1)/2);
      }
    }
    
    
    pop() {
      const heap = this.heap;
      if (heap.length <= 1) return heap.pop();
      const ret = heap[0];
      heap[0] = heap.pop();
      let here = 0;
      while (true) {
        let left = here * 2 + 1, right = here * 2 + 2;
        if (left >= heap.length) break;
        let next = here;
        if (heap[next][0] > heap[left][0]) next = left;
        if (right < heap.length && heap[next][0] > heap[right][0]) next = right;
        if (next === here) break;
        this.swap(here, next);
        here = next;
      }
      return ret;
    }
  }


function solution (N, coffee_times) {
  coffee_times = coffee_times.map((time, idx) => [time, idx+1]);
  
  let mh = new MinHeap();
  let orderArr = [];
  for (let [time, coffee_sn] of coffee_times) {
    if (mh.length() >= N) {
       let [finishTime, finishCoffee] = mh.pop();
       time += finishTime;
       orderArr.push(finishCoffee);
    }
    mh.push([time,coffee_sn]);
  }
  for (let i = 0; i<N; i++) {
    orderArr.push(mh.pop()[1]);
  }
  return orderArr;
}