setInterval(function(){
    //date
    let currentDateTime= new Date();
    let currentDate= currentDateTime.getDate();
    let currentMonth=currentDateTime.getMonth();
    let currentYear=currentDateTime.getFullYear();
    document.getElementById('date').innerHTML=currentDate+"/"+currentMonth+"/"+currentYear;

    //time
    let houres=currentDateTime.getHours();
    let minutes=currentDateTime.getMinutes();
    let seconds=currentDateTime.getMinutes();
    let period="AM"
    if (houres>=12){
        period="PM"
    }
    if(houres>12){
        houres=houres-12;
    }
    if(minutes<10){
        minutes="0"+minutes;
    }
    if(seconds<10){
        seconds="0"+seconds;
    }
    let clock=houres+":"+minutes+":"+seconds+period;
    let time=document.getElementById('time').innerHTML=clock;

});