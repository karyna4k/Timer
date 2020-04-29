let deadline = '2020-05-01';

//remaining time between now and the deadline
//endtime - it's the deadline
function getTimeRemaining(endtime) {
    // t - the difference between (endtime - new Date)
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor((t / (1000 * 60 * 60)));
    //for hours
    //hours =  Math.floor((t / 1000 / 60 / 60) % 24):
    //for days
    //hours =  Math.floor((t / (1000 * 60 *60 * 24)));

    //returning the object
    return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

//inserts the values calculated above directly into the markup
function setClock(id, endtime) {
    //getting elements from the markup
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        //запускаем UptadeClock каждую секунду
        timeInterval = setInterval(updateClock, 1000);

    //updates the clock every second
    function updateClock() {
        let t = getTimeRemaining(endtime);

        //add zero
        function addZero(num) {
            if (num <= 9) {
                return '0' + num;
            } else return num;
        }

        //replacing the values in the markup
        hours.textContent = addZero(t.hours);
        minutes.textContent = addZero(t.minutes);
        seconds.textContent = addZero(t.seconds);


        if (t.total <= 0) {
            clearInterval(timeInterval);
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
        }
    }
}

setClock('timer', deadline);