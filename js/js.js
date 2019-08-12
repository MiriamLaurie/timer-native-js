window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let deadline = '2019-08-21';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),  //превращаем дату в милисекунды, от даты дедлайна отнимаем время, которое идет сейчас
            seconds = Math.floor((t / 1000) % 60),  //оставляем целое число, м/с переводим в секунды и получаем остаток от 60, чтобы секунды не превышали 60 
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));
            // hours = Math.floor((t / 1000 / 60 / 60) % 24), //если нужны дни
            // days = Math.floor((t / (1000 * 60 * 60 * 24)));

            return { //возвращаем значения
                'total': t,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
    }

    function setClock(id, endtime) { //выставляем и запускаем часы
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {  //обвновялем таймер каждую секунду
            let t = getTimeRemaining(endtime);

            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;


            if (t.total <=0) {
                clearInterval(timeInterval); //останавливаем счетчик, когда доходим до нуля
            }
        }
    }

    

    setClock('timer', deadline);
});