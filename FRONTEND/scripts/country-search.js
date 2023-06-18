import popupModal from "./modal.js";

if (document.getElementById("searchButton") != null) {
    document.getElementById("searchButton").onclick = function () {
        var searchInput = document.getElementById("searchInput");
        var inputText = searchInput.value;

        requestCountry(inputText);
    };
}

function requestCountry(countryName) {
    $.ajax({
        type: "GET",
        url: "https://pride-api.onrender.com/api/events/" + countryName,
        success: function (eventsDataFromApi) {
            
            // If the countries match up
            popupModal(eventsDataFromApi);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            if (jqXHR.status === 500) {
              // Handle 500 Internal Server Error
              Swal.fire({
                title: countryName,
                text: "Sorry we currently have no information on this country. Please head to the Submit page and tell us of any events you know have happened in this are. We would love to add them.",
                confirmButtonText: "Close",
            });
            } else {
              // Handle other error cases
              console.log("AJAX request error:", textStatus, errorThrown);
              Swal.fire({
                title: "Error",
                text: "An error occurred while fetching data for " + countryName + ". Please try again later.",
                confirmButtonText: "Close",
                icon: "error"
              });
            }
          }
    });
}

export default requestCountry;
