// 문제
// 아래와 같이 정의된 피보나치 수열 중 n번째 항의 수를 리턴해야 합니다.

// 0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다. 그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
// 입력
// 인자 1 : n
// number 타입의 n (n은 0 이상의 정수)
// 출력
// number 타입을 리턴해야합니다.
// 주의사항
// 재귀함수를 이용해 구현해야 합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 함수 fibonacci가 반드시 재귀함수일 필요는 없습니다.

function fibonacci(n) {
    let newArr = [0, 1];
     let fib = (n) => { 
       if (newArr[n] !== undefined){ 
         return newArr[n]; 
       }
       newArr[n] = fib(n - 1) + fib(n - 2); 
       return newArr[n];
     };
     
     return fib(n); 
   }