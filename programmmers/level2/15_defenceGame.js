class MinHeap {
    constructor () {
      this.heap = [];
    }
    
    swap(a,b) {
      [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    
    push(newValue) {
      const heap = this.heap;
      heap.push(newValue);
      let idx = heap.length-1, parent = Math.floor((idx-1)/2);
      while (idx > 0 && heap[parent] > heap[idx]) {
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
        if (heap[next] > heap[left]) next = left;
        if (right < heap.length && heap[next] > heap[right]) next = right;
        if (next === here) break;
        this.swap(here, next);
        here = next;
      }
      return ret;
    }
    
    min () {
      return this.heap[0];
    }
  }
  
  
  function solution(n, k, enemy) {
      if (enemy.length <= k) return enemy.length;
      
      let skip_stage = new MinHeap();
      for (let i = 0; i<k; i++) {
          skip_stage.push(enemy[i]);
      }
  
      console.log(skip_stage);
      let solider_died = 0;
    
      for (let i = k; i<enemy.length; i++) {
        // 현재 적이 스킵한 스테이지의 최소보다 작을때
        if (enemy[i]<skip_stage.min()) {
          // fight_stage.push(enemy[i])
          solider_died += enemy[i]
        }
        
        else {
            solider_died += skip_stage.pop();
            // fight_stage.push(skip_stage.pop());
            skip_stage.push(enemy[i]);
        }
        
        // solider_died = fight_stage.reduce((acc, cur) => acc+cur, 0)
        console.log(skip_stage, solider_died);
        
        if (solider_died > n) return i;
      }
      
      return enemy.length;
  }