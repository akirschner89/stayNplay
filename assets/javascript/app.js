$(document).ready(function(){



// ticketmaster API boilerplate
 $("#addEventBtn").on("click", function(){
event.preventDefault();

var zip = $("#zipInput").val().trim();
var startDate = $("#startDateInput").val().trim();
var endDate = $("#endDateInput").val().trim();
var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&postalCode=" + zip + "&startDateTime=" + startDate + "T14:00:00Z" + "&endDateTime=" + endDate + "T14:00:00Z" + "&apikey=Y7d6IhdzuKbg2Vw9Vij5Sb1q8q7kP63r";

$.ajax({
  method: "GET",
  url: queryURL
  
}).done(function(response) {
        var results = response.data;
        console.log(results);
        console.log(queryURL);
        });
});
//Firebase Database -- needed to incorporate google hotel api 
var config = {
    apiKey: "AIzaSyClTOHIFhCAp2VtAga6fgZgs_Tdn0X7ue4",
    authDomain: "staynplay-db2.firebaseapp.com",
    databaseURL: "https://staynplay-db2.firebaseio.com",
    projectId: "staynplay-db2",
    storageBucket: "staynplay-db2.appspot.com",
    messagingSenderId: "61188880759"
  };
  firebase.initializeApp(config);


});

