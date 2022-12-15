function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U']
    
    const dictionary = [];
    //재귀적으로 실행되는 함수
    const search = (str) => {
      dictionary.push(str);
      if (str.length === 3) return;
      
      //기존 str에서 [a,e,i,o,u] 를 순회하면서 불러라
      // a => serach('aa'), search('ae'), search('ai')....
      
      vowels.forEach((vowel) => {
          let newStr = str.concat(vowel);
          search(newStr);
      })
    }
    
    search('');
    console.log(dictionary);
    return dictionary.indexOf(word)
}
