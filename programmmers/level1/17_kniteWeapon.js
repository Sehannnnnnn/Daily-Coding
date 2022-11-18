function solution(number, limit, power) {
    let totalcount = 0;
    let arr = [];
    for (let knite = 1; knite<=number; knite++) {
        let countMeasure = 0;
        for (let i = 1; i<=Math.sqrt(knite); i++) {
            if (knite % i == 0) countMeasure += 1;
        }
        if (Number.isInteger(Math.sqrt(knite))) {
          totalcount += downGradeWeapon(countMeasure*2 - 1, limit, power)
        } else {
          totalcount += downGradeWeapon(countMeasure*2, limit, power)
        }
    }
    return totalcount
}

const downGradeWeapon = (attack, limit, power) => {
  if (attack > limit) return power;
  return attack
}