function decryptCaesarCipher(str, secret) {
    // TODO: 여기에 코드를 작성합니다.
    let [a,z] = ['a'.charCodeAt(0), 'z'.charCodeAt(0)]
    const strArr = str.split('');
    const decryptArr = strArr.map(char => {
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