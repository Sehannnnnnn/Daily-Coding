const bubbleSort = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
    if (arr.length == 0) return [];
    for (let i = 0; i<arr.length; i++) {
        let j = 0;
        while (true) {
            if (j == arr.length-i-1) break;
            console.log(arr[j], arr);
            if (arr[j] >= arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            j++;
        }
        console.log('하나 이동 끝')
    }
    return arr;
  };

bubbleSort([5,3,4,2,1])


function bubbleSort (array) {
    for (let i = 0; i < array.length; i++) {
        let swap;    
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                swap = array[j];
                array[j] = array[j + 1];
                array[j + 1] = swap;
            }
        }    
        console.log(`${i}회전: ${array}`);    
        if (!swap) {
            break;    
        }  
    }
    return array;
}
// 출처: https://im-developer.tistory.com/133 [Code Playground:티스토리]