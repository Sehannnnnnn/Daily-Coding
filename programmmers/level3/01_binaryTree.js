function solution(numbers) {
    const answer = [];
    for (let number of numbers) {
        //이진수 변환
        let bi_num = number.toString(2);
        let n = bi_num.length;
        //이진트리를 만들기 위한 노드 개수
        let m = n.toString(2).length
        // 이진수 앞에 0 추가
        let bi_tree = '0'.repeat(2**m-1 - n);
        bi_tree = bi_tree + '' + bi_num;

        checkBTree(bi_tree, 0, bi_tree.length-1)
        answer.push(checkBTree(bi_tree));
    }
    console.log(answer);
    return answer;
}

function checkBTree (b_tree, left, right) {
    if (left == right) return console.log(left);
    let mid = Math.floor(left+right/2);
    checkBTree(b_tree, left, mid);
    checkBTree(b_tree, mid, right);
}

solution([63, 111, 95])