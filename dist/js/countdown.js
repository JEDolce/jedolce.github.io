(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
        countDown = new Date(2021, 11, 04, 18, 0, 0).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime(),
              distance = countDown - now;
  
            document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance  < 0) {
            let headline = document.getElementById("headline"),
                section = document.getElementById("section"),
                countdown = document.getElementById("countdown");
  
            headline.innerText = "EMPEZO LA FIESTA!!!";
            section.style.height = "6rem"
            countdown.style.display = "none";
  
            clearInterval(x);
          }

          //seconds
        }, 0)
    }());