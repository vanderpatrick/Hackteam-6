function requestPoints() {
    let markerPoints = [];
$.ajax({
    type: "GET",
    url: "https://pride-api.onrender.com/api/events",
    success: function (eventsDataFromApi) {
        
        // get country for event from api
        for (let eventFromApi in eventsDataFromApi) {
            // get country for event from api
            
            let lat = eventsDataFromApi[eventFromApi].lat;
            let long = eventsDataFromApi[eventFromApi].long;
            let country = eventsDataFromApi[eventFromApi].country;
            let region = eventsDataFromApi[eventFromApi].region;
            markerPoints.push([long, lat, country, region]);
        }
        
    },
    error: function(jqXHR, textStatus, errorThrown) {
        
          // Handle other error cases
          console.log("AJAX request error:", textStatus, errorThrown);
          Swal.fire({
            title: "Error",
            text: "An error occurred while fetching markers for the map. Please try again later.",
            confirmButtonText: "Close",
            icon: "error"
          });
        }
});
console.log(markerPoints)
return markerPoints;
}

export default requestPoints;