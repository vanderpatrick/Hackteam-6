import popupModal from "./modal.js";

const api_key =
  "pk.eyJ1IjoidmFuZGVycGF0cmljayIsImEiOiJjbGl4Z3k0MGIwMjVsM2ZxaHZqb2N1eWRrIn0.0C1bvIus93BFOjdSBb2dMA";

mapboxgl.accessToken = api_key;

// Create reference for map
const map123 = document.querySelector("#map");

// Colours to choose from
const colorChoice = [
  "#E30303",
  "#E67E00",
  "#E6D600",
  "#00E642",
  "#0047E6",
  "#BD0BDB",
];

// Which color in colorCount
let colorCount = 0;

// Create instance of Map
const map = new mapboxgl.Map({
    container: map123,
    style: "mapbox://styles/mapbox/light-v10",
    center: [0, 0],
    zoom: -5,
    // dragPan: false,
    renderWorldCopies: false,
    scrollZoom: false,
    boxZoom: false,
    doubleClickZoom: false,
    style: {
        version: 8,
        sources: {

        },
        layers: [
          {
            id: 'background',
            type: 'background',
            paint: { 'background-color': '#0f172a' }
          }
        ]

      },
});
// On map style load 
map.on('style.load', function (){
  map.setPaintProperty('background', 'background-color', '#0f182')
})
// On map load
map.on("load", () => {
  let intervalID;
  // remove labels from map
  map.style.stylesheet.layers.forEach(function (layer) {
    if (layer.type === "symbol") {
      map.removeLayer(layer.id);
    }
    map.setPaintProperty('background', 'background-color', '#0f182')
  });

    // the layer for outlining countries (in white originally)
    map.addLayer({
        id: "countries-layer",
        type: "fill",
        source: {
            type: "vector",
            url: "mapbox://mapbox.country-boundaries-v1",
        },
        "source-layer": "country_boundaries",
        paint: {
            "fill-color": "#F46D71",
        }
    });
    // Then the layer that allows highlighting in blue on hover (hidden on load)
    map.addLayer({
        id: "countries-highlighted-layer",
        type: "line",
        source: {
            type: "vector",
            url: "mapbox://mapbox.country-boundaries-v1",
        },
        "source-layer": "country_boundaries",
        paint: {
            "line-color": "#0000ff",
            "line-opacity": 1,
            "line-width": 2,
        },
        // Initially hide the highlighted layer
        filter: ["==", "iso_3166_1_alpha_2", ""],
    });

  // When the mouse moves over the country layer
  map.on("mousemove", "countries-layer", (e) => {
    clearInterval(intervalID);
    intervalID = setInterval(() => {
      // Increment the colorCount variable
      colorCount = (colorCount + 1) % colorChoice.length;

      // Set the color of the border
      map.setPaintProperty(
        "countries-highlighted-layer",
        "line-color",
        colorChoice[colorCount]
      );
    }, 1500);
    // Change the mouse to style of pointer
    map.getCanvas().style.cursor = "pointer";

    // get the GeoJSON features (that include the values that represent the outline of the map)
    // where the mouse (e.point) is on the map
    const features = map.queryRenderedFeatures(e.point, {
      layers: ["countries-layer"],
    });

    // If there are features
    if (features.length > 0) {
      // set the outline of that country to hoveredCountryISO
      const hoveredCountryISO = features[0].properties.iso_3166_1_alpha_3;
      // Then highlight the country you hovered over by setting the filter with hoveredCountryISO
      map.setFilter("countries-highlighted-layer", [
        "==",
        "iso_3166_1_alpha_3",
        hoveredCountryISO,
      ]);
    }
  });

  // When mouse leaves a country border change the colour
  map.on("mouseleave", "countries-highlighted-layer", () => {
    // If it was 5 reset to first color again
    if (colorCount == 5) {
      colorCount = 0;
    } else {
      // otherwise use the next color
      colorCount = colorCount + 1;
    }
    // set the color of the border
    map.setPaintProperty(
      "countries-highlighted-layer",
      "line-color",
      colorChoice[colorCount]
    );
  });

  // When the mouse leaves the county set the outline back to nothing (i.e. empty string)
  map.on("mouseleave", "countries-layer", () => {
    map.getCanvas().style.cursor = "";
    map.setFilter("countries-highlighted-layer", [
      "==",
      "iso_3166_1_alpha_3",
      "",
    ]);
  });

  // On clicking the countries layer
  map.on("click", "countries-layer", (e) => {
    // get data for clicked feature
    const clickedFeature = e.features[0];

    // get country name from this data
    const mapCountryName = clickedFeature.properties.name_en;
    const mapCountryRegion = clickedFeature.properties.region;
    // make call to api for events data
    test(mapCountryName);
  });
  var searchButton = document.getElementById("searchButton");
  var searchInput = document.getElementById("searchInput");
  var countries = ["United States", "Canada", "United Kingdom", "Germany", "France", "Japan", "Australia", "Brazil", "India", "China"];


  searchButton.addEventListener("click", handleSearch);

  function handleSearch() {
    var inputText = searchInput.value;
    var autoCompleteResults = countries.filter(function(country) {
      return country.toLowerCase().startsWith(inputText.toLowerCase());
    });
  
    if (autoCompleteResults.length > 0) {
      var filteredName = autoCompleteResults[0];
      searchInput.value = filteredName;
      test(filteredName);
    }
  }
  function test(NAME) {
    $.ajax({
      type: "GET",
      url: "https://pride-api.onrender.com/api/events",
      success: function (eventsDataFromApi) {
        // Loop through events
        for (let i = 0; i < eventsDataFromApi.length; i++) {
          // get country for event from api
          let apiCountryName = eventsDataFromApi[i].country;
          // If the countries match up
          if (apiCountryName == NAME) {
            popupModal(eventsDataFromApi[i]);
            break;
          } else {
            // If no data is in the database for the clicked country display generic message
            Swal.fire({
              title: NAME,
              text: "Sorry we currently have no information on this country. Please head to the Submit page and tell us of any events you know have happened in this are. We would love to add them.",
              confirmButtonText: "Close",
            });
          }
        }
      },
    });
  }
});
