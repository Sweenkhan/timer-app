let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");
 
let hours = 0;
let minutes = 0;
let seconds = 0;
let timeRunning;

let stoping = false;

let showTime = document.querySelector(".showCnt");

 
startBtn.addEventListener("click", ()=>{

   stopBtn.style.opacity = "0.5"
   resetBtn.style.opacity = "0.5"
   startBtn.style.opacity = "1"
   // stoping = true
   timeRunning = setInterval(() => {
          if(seconds == 60){
            
             minutes++
              seconds = 0
           
           

              if(minutes == 60) {
                 hours++
                 minutes = 0;
                 seconds = 0;
               }

          } else if (seconds < 10 ){ 
              seconds = "0" + seconds++;
               
               
          }  else {
            console.log("hello else")
          }


         
          showTime.innerHTML = "0" + hours + ":0" + minutes + ":" + seconds 
          seconds++
         
   },1000)
   
})



stopBtn.addEventListener("click", () => { 
   clearInterval(timeRunning)
   resetBtn.style.opacity = "0.5"
   startBtn.style.opacity = "0.5"
   stopBtn.style.opacity = "1"
})



resetBtn.addEventListener("click", () => {
  seconds = 0;
  minutes = 0;
  hours = 0; 
  showTime.innerHTML = "0" + hours + ":0" + minutes + ":0" + seconds

  stopBtn.style.opacity = "0.5"
   startBtn.style.opacity = "0.5"
   resetBtn.style.opacity = "1"
 
})

 
showTime.innerHTML = "0" + hours + ":0" + minutes + ":0" + seconds
