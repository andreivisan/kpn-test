/**
 * Created by andreivisan on 2/19/17.
 */
$(document).ready(function(){
    $("#generateNextPrime").click(function() {
        var previousPrime = $("#nextPrimeNumber").text();
        console.log("Previous prime number is: ", previousPrime);
        generateNextPrimeNo(previousPrime);
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