let countDateTime=new Date('Aug 01,2024 12:00:00').getTime();
let x=setInterval(function(){
    let now=new Date().getTime();
    let difference=countDateTime-now;
    let day=Math.floor(difference/(1000*60*60*24));
    let hours=Math.floor((difference%(1000*60*60*24))/(1000*60*60));
    let minute=Math.floor((difference%(1000*60*60))/(1000*60));
    let second=Math.floor((difference%(1000*60))/(1000));

    document.getElementById('timer').innerHTML=day+"DAYS |"+hours+"h :"+minute+"m :"+second+"s ";

    if(difference<0)
        {
            clearInterval(x);
            document.getElementById('timer').innerHTML="Birthday Expire";
        }

})