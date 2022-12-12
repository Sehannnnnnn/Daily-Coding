function newChickenRecipe(stuffArr, choiceNum) {
    // TODO: 여기에 코드를 작성하세요.
    const freshStuff = stuffArr.filter((stuff) => {
      let count0 = String(stuff).split('').reduce((acc, cur) => {
        if (cur == 0) return acc+1;
        else return acc;
      }, 0);
      return count0 < 3
    })
    
    if (freshStuff.length == 0) return [];
    if (freshStuff.length < choiceNum) return [];
    
    const permutation = [];
    const getPermutation = (arr, rest, N) => {
      if (N == 0) return permutation.push(arr);
      rest.forEach((stuff, idx) => {
        let new_rest = [...rest.slice(0,idx), ...rest.slice(idx+1)]
        getPermutation([...arr, stuff], new_rest, N-1)
      })
    }
    
    getPermutation([], freshStuff, choiceNum)
    return permutation;
  }
  
  const output1 = newChickenRecipe([1, 10, 1100, 1111, 1000], 2);
  console.log(output1);
  /*
    [
      [1, 10], [1, 1100], [1, 1111],
      [10, 1], [10, 1100], [10, 1111],
      [1100, 1], [1100, 10], [1100, 1111],
      [1111, 1], [1111, 10], [1111, 1100]
    ];
    */
  