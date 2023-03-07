function solution (str1, str2) {
    function makePiece2Dict (str) {
      str = str.toLowerCase();
      let checkEng = /^[a-zA-Z]*$/
      const dict = {};
      for (let i = 0; i<str.length-1; i++) {
        let word = str[i]+str[i+1];
        if (checkEng.test(word)) {
          if (dict[word] == undefined) {
            dict[word] = 1;
          }
          else {
            dict[word] = dict[word] + 1;
          }
        } 
      }
     return dict;
    }
    
    let a = makePiece2Dict(str1)
    let b = makePiece2Dict(str2)
  
  
    let intersection = 0;
    let union = 0;
  
    Object.entries(b).forEach(([word, cnt]) => {
      //서로 같은것이 있으면
      if (a[word] > 0) {
        intersection += Math.min(a[word], cnt);
        union += Math.max(a[word], cnt);
        delete a[word];
      }
      //서로 같은것이 없으면
      else {
        union += cnt;
      }
    })
  
    Object.entries(a).forEach(([word,cnt]) => {
      union += cnt;
    })
    
    if (union == 0) return 65536
    return Math.floor(intersection/union*65536);
  
  }
  
  solution("FRANCE", "french")
  