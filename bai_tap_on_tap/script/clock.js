let seconds = document.getElementById("seconds").innerHTML;
    let resultSeconds = function countDown() {
        seconds--;
        document.getElementById("seconds").innerHTML = seconds;

        if (seconds == 0) {
            seconds = 4;   // o day la 59
            setTimeout(() => {
                let minutes = document.getElementById('minutes').innerHTML;
                minutes--;
                document.getElementById('minutes').innerHTML = minutes;
                if (minutes == 0) {
                    document.getElementById('minutes').innerHTML = 3; // o day la 59

                    setTimeout(() => {
                        let hours = document.getElementById('hours').innerHTML;
                        hours--;
                        document.getElementById('hours').innerHTML = hours;

                    }, 100)
                }

            }, 1000)

        }
    }
    setInterval(resultSeconds, 1000)