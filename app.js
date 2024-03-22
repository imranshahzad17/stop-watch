let min = 0;
let sec = 0;
let ms = 0;
let interval ;
let getmin = document.getElementById("minute");
let getsec = document.getElementById("second");
let getms = document.getElementById("ms");
function start(){
    interval = setInterval(function() {
       ms++;
       getms.innerHTML = ms ;
       if (ms >=100) {
        sec++;
        getsec.innerHTML = sec ;
        ms = 0;
       }else if(sec >=60){
        min++;
        getmin.innerHTML = min;
        sec = 0;
       }  
    },10);
    let strbtn = document.getElementById("start").disabled = true;
}
function stop(){
    clearInterval(interval)
    let strbtn = document.getElementById("start").disabled = false;

}
function reset(){
     min = 0;
     sec = 0;
     ms = 0;
     getmin.innerHTML = min;
     getsec.innerHTML = sec;
     getms.innerHTML = ms;
     stop()
}