function missHouseMeal(sideDishes) {
    // TODO: 여기에 코드를 작성합니다.
    let powerSet = [];
    sideDishes = sideDishes.sort();
    const getPowerSet = (arr,rest) => {
      if (rest.length == 0) return powerSet.push(arr);
      let new_rest = rest.slice(1)
      getPowerSet([...arr, rest[0]], new_rest);
      getPowerSet([...arr], new_rest);
    }
    
    getPowerSet([],sideDishes);
    return powerSet.sort();
  }
  
  let output = missHouseMeal(['pasta', 'oysterSoup', 'beefRibs', 'tteokbokki']);
  console.log(output);