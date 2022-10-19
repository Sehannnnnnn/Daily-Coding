// 문제
// 암호화된 문자열과 암호화 키를 입력받아 복호화된 문자열을 리턴해야 합니다.
// 카이사르 암호(Caesar cipher)는 평문(plaintext)을 암호키 secret개만큼 (오른쪽으로) 평행이동시켜 암호화 합니다. 복호화는 암호화된 문자열을 원래의 평문으로 복원하는 것을 말합니다.

// 'hello'를 secret 3으로 암호화한 경우: 'khoor'
// 입력
// 인자 1 : str
// string 타입의 알파벳 소문자 문자열
// 인자 2 : secret
// number 타입의 암호화 키
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
// 공백은 그대로 두어야 합니다.

function decryptCaesarCipher(str, secret) {
    // TODO: 여기에 코드를 작성합니다.
    let [a,z] = ['a'.charCodeAt(0), 'z'.charCodeAt(0)]
    const strArr = str.split('');
    const decryptArr = strArr.map(char => {
        if (char == '') return char;
        let unicode = char.charCodeAt(0)-secret;
        if (unicode < a) {
            return String.fromCharCode(z-(a-unicode-1));
        } return String.fromCharCode(unicode);
    });

    return decryptArr.join('');
  }
  
  let output = decryptCaesarCipher('khoor', 3);
  console.log(output); // --> hello
  
  output = decryptCaesarCipher('zruog', 3);
  console.log(output); // --> world