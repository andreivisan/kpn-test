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

    var countIdleInterval = setInterval(incrementTimer, 60000); // 1 minute

    //Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        idleTime = 0;
    });
    $(this).keypress(function (e) {
        idleTime = 0;
    });
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

function incrementTimer() {
    idleTime = idleTime + 1;
    if (idleTime > 3) { // 3 minutes
        window.location.reload();
    }
}