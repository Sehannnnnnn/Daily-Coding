const arr = [];
function binarySearch(b_str, start = 0, end = b_str.length-1) {
    //부모 노드 idx
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

    if (!binarySearch(b_str, start, mid-1)) return false;
    if (!binarySearch(b_str, mid+1, end)) return false;
    return true;
}

console.log(binarySearch("1111111"))
