function solution(s) {
    let weird_word = '';
    let wordIdx = 0;
    for (let i = 0; i<s.length; i++) {
        if (s[i] === ' ') {
            wordIdx = 0;
            weird_word += s[i]
        }
        else {
            if (wordIdx % 2 == 1) {
                wordIdx ++;
                weird_word += s[i].toLowerCase();
            }
            else {
                wordIdx ++;
                weird_word += s[i].toUpperCase();
            }   
        }
    }
    return weird_word;
}