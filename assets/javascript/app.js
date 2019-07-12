var answers = ["G minor"];
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var totalnumberofseconds = 10;
var changetimerevery = 1000;
function timeUp() {
    for (var i = 0; i < answers.length; i++) {
        var correctAnswer = answers[i];
        var userAnswer = "";
        var options = document.getElementsByName("question" + i)
        for (var j = 0; j < options.length; j++) {
            if (options[j].checked) {
                userAnswer = options[j].value;
            }
        }
        if (userAnswer === correctAnswer) {
            correct++;
        }
        else if (userAnswer === "") {

            unanswered++;
        }
        else {
            incorrect++;
        }

    }
    document.getElementById("summary").innerHTML = correct
}
setTimeout(timeUp, totalnumberofseconds * 1000)
function updateTimer() {

    var timer = totalnumberofseconds--;
    if (timer < 0) {
        timer = "Time up!";
    }
    document.getElementById("time-left").innerHTML = timer;
}
setInterval(updateTimer, changetimerevery)