// ticketmaster API boilerplate

function getEvents() {

var zip = $(#PLACEHOLDER).val().trim();
var startDate = $(#PLACEHOLDER).val().trim();
var endDate = $(#PLACEHOLDER).val().trim();
var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&postalCode=" + zip + "&startDateTime=" + startDate + "&endDateTime=" + endDate + "&apikey=Y7d6IhdzuKbg2Vw9Vij5Sb1q8q7kP63r";

$.ajax({
  method: "GET",
  url: queryURL
  
}).done(function(response) {
        var results = response.data;
        console.log(results);
        })
};

getEvents();


