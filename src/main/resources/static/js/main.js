/**
 * Created by andreivisan on 2/19/17.
 */
var idleTime = 0;

$(document).ready(function(){
    $("#generateNextPrime").click(function() {
        var previousPrime = $("#nextPrimeNumber").text();
        console.log("Previous prime number is: ", previousPrime);
        generateNextPrimeNo(previousPrime);
    });

    //START counting for issuing a new session
    var countIdleInterval = setInterval(incrementTimer, 60000); // 1 minute

    //Reset the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        idleTime = 0;
    });
    //Reset the idle timer on key press.
    $(this).keypress(function (e) {
        idleTime = 0;
    });
    //END counting for issuing a new session
});

function generateNextPrimeNo(previousPrime) {
    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "/nextPrime/" + previousPrime,
        dataType: 'json',
        success: function(data) {
            console.log("Next prime number is: ", data);
            $("#previousPrimeNumber").text(previousPrime);
            $("#nextPrimeNumber").text(data);
        },
        error: function(error) {
            console.log("ERROR: ", error);
        }
    })
}

//Increment time and when time reaches 3 minutes issue new session
function incrementTimer() {
    idleTime = idleTime + 1;
    if (idleTime > 3) { // 3 minutes
        window.location.reload();
    }
}