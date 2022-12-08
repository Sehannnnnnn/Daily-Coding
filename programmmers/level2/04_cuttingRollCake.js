function solution(topping) {
    let fairCount = 0;
    
    let left = topping;
    let leftMap = new Map();
    topping.forEach((top) => {
        let count = leftMap.get(top) ?? 0
        leftMap.set(top, count+1);
    })
    let leftToppingCount = leftMap.size;
    
    let rightSet = new Set();
    let rightToppingCount = rightSet.size;
    
    console.log(left, leftMap, leftToppingCount);
    
    while (left.length > 0) {    
        let move = left.pop();
        //1. rightSet에 요소 추가 -> rightSet의 사이즈가 rightCount++
        rightSet.add(move);
        rightToppingCount = rightSet.size;
        
        //2. leftMap 에서 1 제거, leftMap[move]의 값이 0인경우 leftCount --
        leftMap.set(move, leftMap.get(move) - 1)
        if (leftMap.get(move) == 0) {leftToppingCount --;}
        
        if (leftToppingCount == rightToppingCount) fairCount++;
    }
    
    return fairCount;
}