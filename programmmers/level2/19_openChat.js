function solution(record) {
    //map을 생성
    const userDB = new Map();
    //record를 순회하며
    for (let i = 0; i<record.length; i++) {
        let [action, uid, nickname] = record[i].split(' ');
        if (action == "Enter" || action == "Change") {
            userDB.set(uid, nickname);
        }
    }

    const result = [];
    for (let i = 0;i<record.length; i++) {
        let [action, uid, nickname] = record[i].split(' ');
        let message = "";
        if (action == "Enter") {
            message = `${userDB.get(uid)}님이 들어왔습니다.`
            result.push(message);
        }
        if (action == "Leave") {
            message = `${userDB.get(uid)}님이 나갔습니다.`;
            result.push(message);
        }   
    }

    return result;
}

solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]);