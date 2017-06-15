console.log("Hello Local Weather App");

// Init essential variables
var url = "https://api.wunderground.com/api/50a65432f17cf542/conditions/q/";
var lat ;
var long ;
var temp_f;
var temp_c;

// Init a function that appends weather data to DOM
var appendData = function(data) {
  console.log(data);
  $(".location").html(data.current_observation.display_location.full);
  $("#number").html(data.current_observation.temp_c);
  $(".image").html("<img src='" + data.current_observation.icon_url + "'> ");
  temp_f = data.current_observation.temp_f;
  temp_c = data.current_observation.temp_c;
};

// Init a function that toggles temperature units and values
var toggleUnit = function(){
  if ($("#unit").text() == "°C"){
    $("#number").html(temp_f);
    $("#unit").text("°F");
  } else {
    $("#number").html(temp_c);
    $("#unit").text("°C");
  }
};

// On document ready, fetch weather data on API and append it to DOM
$(document).ready(function(){
  // Get Location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      //  Get Weather for defined Location
      $.ajax({
        headers : {
          Accept : "application/json"
        },
        url : url + lat + ',' + long + '.json',
        type : 'GET',
        success: appendData,
        error : function(err, status){
          console.log(status);
        }
      });
    });
  }
});

// On unit click, toggle temperature units and values
$("#unit").on("click", toggleUnit);
