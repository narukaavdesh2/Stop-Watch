const clock = document.querySelector(".stopWatch");

let second = 0;
let min = 0;
let hour = 0;
let intervalID;
let transfrom;
const startStopWatch = () => {
        intervalID = setInterval(() => {
        
        if(second < 59){
            second++;
        }
        else if(min >=  59){
            hour++;
            min = 0;
        }
        else{
            min++;
            second = 0;
        }

        transfrom = () => {
        var sec = second.toString().padStart(2,"0");
        var mi = min.toString().padStart(2,"0");
        var hr = hour.toString().padStart(2,"0");

        clock.innerText = `${hr}:${mi}:${sec}`;

        }

        transfrom();


    },1000);
};

const stopStopWatch = () => {
    clearInterval(intervalID);
}

const reset = () => {
     second = 0;
     min = 0;
     hour = 0;

    transfrom();


}