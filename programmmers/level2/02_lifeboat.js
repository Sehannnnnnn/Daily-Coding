function solution(people, limit) {
    var answer = 0;
    const checkArr = new Array(people.length).fill(true);
    people = people.sort((a,b) => a-b);
    console.log(people)
    let i = people.length-1;
    let j = 0;
    while (i >= j) {
      let big = people[i];
      let small = people[j];
      console.log(big, small);
      if (big+small <= limit) {
        i--;
        j++;
      }
      else {
        i--;
      }
      answer ++;
    }
    return answer;
  }
  
  solution([70,50,80],100)