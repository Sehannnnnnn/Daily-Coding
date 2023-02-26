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
        console.log(bi_tree, number)
        if (checkBTree(bi_tree, 0, bi_tree.length-1)) {
            answer.push(1);
        }
        else {
            answer.push(0);
        }
    }
    console.log(answer);
    return answer;
}

function checkBTree (b_str, start, end) {
    const mid = Math.floor((start+end) / 2);
    //자식 노드 idx
    const left_c = Math.floor((start + mid-1)/2);
    const right_c = Math.floor((mid+1 + end)/2);
    
    if (start == end) {
        console.log(mid);
        return true;
    }
    console.log(left_c, mid, right_c);
    if (b_str[mid] === '0' && ((b_str[left_c] === '1') || (b_str[right_c] === '1'))) {
        return false;
    }

    if (!checkBTree(b_str, start, mid-1)) return false;
    if (!checkBTree(b_str, mid+1, end)) return false;
    return true;
}


solution([63, 111, 95])

