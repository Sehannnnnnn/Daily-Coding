function solution (w,h) {
    const GDC = (a,b) => {
      let max = Math.max(a,b);
      let min = Math.min(a,b);
      let r = max % min;
      if (r == 0) return min;
      else return GDC(min, r);
    }
    let total = w*h;
    let gdc = GDC(w,h);
    
    w = w/gdc;
    h = h/gdc;
    
    const slope = h/w;
    let i = 1;
    console.log(slope)
    let erase = 0;
    let start = 0;
    let end = 0;
    while (i <= w) {
        end = Math.ceil(slope*i);
        erase += end - start;
        start = Math.floor(slope*i);
        i++;
    }
    console.log(erase*gdc);
    return total - erase*gdc;
}
  

solution(12, 8)