function solution(s, times) {
    let savetime = s;
    let count1day1save = 1;
    for (let time of times) {
      let [s_year, s_month, s_day, , ,] = savetime.split(':').map(ele => +ele);
      let [newDateArr, newDate] = addTime(savetime, time);
      console.log("1일 1저축", oneDayPassed([s_year, s_month, s_day], newDateArr.slice(0,3)))
      if (!oneDayPassed([s_year, s_month, s_day], newDateArr.slice(0,3))) {
        count1day1save = 0
      }
      savetime = newDate;
      console.log(savetime)
    }
    return [count1day1save, calculateDayPass(s, savetime)]
  }
  //날짜 계산기
  function calculateDayPass(s, r) {
      let [s_year, s_month, s_day] = s.split(':').map(ele => +ele).slice(0,3);
      let [r_year, r_month, r_day] = r.split(":").map(ele => +ele).slice(0,3);
    
      r_month = r_month + 12*(r_year - s_year);
      r_day = r_day + 30*(r_month - s_month);
      return r_day-s_day+1;
  }
  
  
  //하루만 지났는지 확인
  function oneDayPassed ([s_year, s_month, s_day], [r_year, r_month, r_day]) {
    //하루가 아직 안지날때
    if (s_year == r_year && s_month == r_month && s_day == r_day) return true;
    //12월 30일일때
    if (s_month == 12 && s_day == 30) {
      //내년 1월 1일이면
      if (s_year+1 == r_year && r_month == 1 && r_day == 1) return true;
      else return false;
    }
    //매달 30일 일때
    if (s_day == 30) {
      if (s_month + 1 == r_month && r_day == 1) return true;
      else return false
    } 
    //일반적인 하루 지남
    if (r_day - 1 == s_day) return true;
    return false;
  }
  //시간 더하기
  function addTime(s, t) {
    let [year, month, day, hour, min, sec] = s.split(':').map(ele => +ele);
    let [addDay, addHour, addMin, addSec] = t.split(":").map(ele => +ele);
    
    sec += addSec;
    if (sec >= 60) {
      sec -= 60;
      min += 1;
    }
    min += addMin;
    if (min >= 60) {
      min -= 60;
      hour += 1;
    }
    hour += addHour;
    if (hour >= 24) {
      hour -= 24;
      day += 1;
    }
    day += addDay;
    //addDay <= 99;
    while (day > 30) {
      day -= 30;
      month += 1;
    }
    if (month > 12) {
      month -= 12;
      year += 1;
    }
    let resultTime = [year, month, day, hour, min, sec].join(":");
    return [[year, month, day, hour, min, sec], resultTime]
  }
  
  
  // addTime("2021:04:12:16:08:35", "41:13:59:30")
  
  
  solution("2021:04:12:16:08:35",["01:06:30:00","01:04:12:00"])