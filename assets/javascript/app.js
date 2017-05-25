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

        // for (var i = 0; i < results.length; i++) {
        //     var animalDiv = $("<div>");
        //     var p = $("<p>").text("Rating: " + results[i].rating);
        //     var animalImage = $("<img>");
        //     animalImage.attr("src", results[i].images.fixed_height_still.url);
        //     animalImage.attr("data-still", results[i].images.fixed_height_still.url);
        //     animalImage.attr("data-animate", results[i].images.fixed_height.url);
        //     animalImage.attr("data-state", "still");
        //     animalImage.addClass("animalGif");
        //     animalDiv.append(p);
        //     animalDiv.append(animalImage);
        //     animalDiv.addClass("gifDiv");
        //     $("#animal-view").append(animalDiv);
        })
};

getEvents();


