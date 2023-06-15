
const api_key =   "pk.eyJ1IjoidmFuZGVycGF0cmljayIsImEiOiJjbGl4Z3k0MGIwMjVsM2ZxaHZqb2N1eWRrIn0.0C1bvIus93BFOjdSBb2dMA";

mapboxgl.accessToken = api_key

const map123 = document.querySelector("#map");
let test = document.querySelector(".change")
import  handleTestEvent  from './modal.js';

document.addEventListener('DOMContentLoaded', function() {
  // Get the button element
  var testButton = document.getElementById('testButton');

  // Add a click event listener to the button
  testButton.addEventListener('click', handleTestEvent);
});

const new_map = new mapboxgl.Map({
  container: map123,
  style: "mapbox://styles/mapbox/light-v10",
  center: [0, 0],
  zoom: 0.5,
});

new_map.on("load", () => {
  new_map.addLayer({
    id: "countries-layer",
    type: "fill",
    source: {
      type: "vector",
      url: "mapbox://mapbox.country-boundaries-v1",
    },
    "source-layer": "country_boundaries",
    paint: {
      "fill-color": "#ffffff",
      "fill-opacity": 0.6,
    },
  });

  new_map.addLayer({
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
    filter: ["==", "iso_3166_1_alpha_2", ""], // Initially hide the highlighted layer
  });

  new_map.on("mousemove", "countries-layer", (e) => {
    new_map.getCanvas().style.cursor = "pointer";
    const features = new_map.queryRenderedFeatures(e.point, {
      layers: ["countries-layer"],
    });
    if (features.length > 0) {
      const hoveredCountryISO = features[0].properties.iso_3166_1_alpha_3;
      new_map.setFilter("countries-highlighted-layer", [
        "==",
        "iso_3166_1_alpha_3",
        hoveredCountryISO,
      ]);
    }
  });

  new_map.on("mouseleave", "countries-layer", () => {
    new_map.getCanvas().style.cursor = "";
    new_map.setFilter("countries-highlighted-layer", [
      "==",
      "iso_3166_1_alpha_3",
      "",
    ]);
  });
  new_map.on("click", "countries-layer", (e) => {
    const clickedFeature = e.features[0];
  console.log(clickedFeature);

  const countryName = clickedFeature.properties.name;
  const countryCode = clickedFeature.properties.iso_3166_1_alpha_3;

  test.innerHTML = handleTestEvent()
  })
});
