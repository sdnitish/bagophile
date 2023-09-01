var CountDownDate = new Date("Jan 1, 2024 12:00:00").getTime();

var countdownfunction = setInterval(function() {

    var TimeNow = new Date().getTime();
    var distance = CountDownDate - TimeNow;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("c_days").innerHTML = days ;
    document.getElementById("c_hours").innerHTML = hours ;
    document.getElementById("c_minutes").innerHTML = minutes ;
    document.getElementById("c_seconds").innerHTML = seconds ;

    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("c_days").innerHTML = "0 ";
    }

    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("c_hours").innerHTML = "0 ";
    }

    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("c_minutes").innerHTML = "0 ";
    }

    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("c_seconds").innerHTML = "0 ";
    }

}, 1000);