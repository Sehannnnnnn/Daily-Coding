function boringBlackjack (arr) {
    const combination = [];
    const getCombination = (array, rest, N = 3) => {
      if (rest.length == 0) {
        if (N == 0) return combination.push(array)
        return
      }
      getCombination([...array, rest[0]], rest.slice(1), N-1)
      getCombination([...array], rest.slice(1), N)
    }
    
    getCombination([], arr, 3);
    return combination.map((comb) => comb.reduce((acc, cur) => {return acc+cur})).filter(sum => isPrimeNum(sum)).length;
  }
  
  
  const isPrimeNum = (n) => {
    let K = parseInt(Math.sqrt(n));
    for (let i = 2; i<=K; i++) {
      if (n % i == 0) return false;
    }
    return true;
  }