import popupModal from "./modal.js";

if (document.getElementById("searchButton") != null) {
    document.getElementById("searchButton").onclick = function () {
        var searchInput = document.getElementById("searchInput");
        var inputText = searchInput.value;
        console.log(inputText);

        requestCountry(inputText);
    };
}

function requestCountry(countryName) {
    console.log("sending request");
    $.ajax({
        type: "GET",
        url: "https://pride-api.onrender.com/api/events/" + countryName,
        success: function (eventsDataFromApi) {
            // get country for event from api
            let apiCountryName = eventsDataFromApi.country;
            // If the countries match up
            if (apiCountryName == countryName) {
                popupModal(eventsDataFromApi);
            } else {
                // If no data is in the database for the clicked country display generic message
                Swal.fire({
                    title: countryName,
                    text: "Sorry we currently have no information on this country. Please head to the Submit page and tell us of any events you know have happened in this are. We would love to add them.",
                    confirmButtonText: "Close",
                });
            }
        },
    });
}

export default requestCountry;
