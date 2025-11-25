
function getDiff(date1,date2){
    let years = date2.getFullYear() - date1.getFullYear();
    let months = date2.getMonth() - date1.getMonth();
    let days = date2.getDate() - date1.getDate();
    let hours = date2.getHours() - date1.getHours();
    let minutes = date2.getMinutes() - date1.getMinutes();
    let seconds = date2.getSeconds() - date1.getSeconds();
    
    if(seconds < 0){
        seconds += 60;
        minutes--;
    }
    
    if(minutes < 0){
        minutes += 60;
        hours--;
    }
    
    if(hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        days += new Date(date2.getFullYear(), date2.getMonth(), 0).getDate();
        months --;
    }
    if (months < 0) {
        months += 12;
        years--;
    }
    return {years,months,days,hours,minutes,seconds}
}


const RemainingTime = new Date(2026,0,1);

      
      const timer = document.querySelector('.timer');
    let i = 0;
    setInterval(() => {
        const now = new Date();
        const diff = getDiff(now, RemainingTime);
        timer.innerHTML = `<div> До нового года осталось: ${ diff.months + " месяцев, " +
            diff.days + " дней, " +
            diff.hours + " часов, " +
            diff.minutes + " минут, " +
            diff.seconds + " секунд"}`
    },1000)
