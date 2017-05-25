$(document).ready(function(){



// ticketmaster API boilerplate
 $("#addEventBtn").on("click", function(){


var zip = $("#zipInput").val().trim();
var startDate = $("#startDateInput").val().trim();
var endDate = $("#endDateInput").val().trim();
var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&postalCode=" + zip + "&startDateTime=" + startDate + "&endDateTime=" + endDate + "&apikey=Y7d6IhdzuKbg2Vw9Vij5Sb1q8q7kP63r";

$.ajax({
  method: "GET",
  url: queryURL
  
}).done(function(response) {
        var results = response.data;
        console.log(results);
        });
});
});

