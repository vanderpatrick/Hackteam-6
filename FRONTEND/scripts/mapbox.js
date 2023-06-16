const api_key = "pk.eyJ1IjoidmFuZGVycGF0cmljayIsImEiOiJjbGl4Z3k0MGIwMjVsM2ZxaHZqb2N1eWRrIn0.0C1bvIus93BFOjdSBb2dMA";

mapboxgl.accessToken = api_key

// Create reference for map
const map123 = document.querySelector("#map");
let test = document.querySelector(".change")
import  handleTestEvent  from './modal.js';

// Create instance of Map
const map = new mapboxgl.Map({
  container: map123,
  style: "mapbox://styles/mapbox/light-v10",
  center: [0, 20],
  zoom: -4,
  // dragPan: false,
  renderWorldCopies: false,
});

// On map load
map.on("load", () => {
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
      "fill-color": "#ffffff",
      "fill-opacity": 0.6,
    },
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
    const clickedFeature = e.features[0];
  console.log(clickedFeature);

  const countryName = clickedFeature.properties.name_en;
  const countryCode = clickedFeature.properties.region;

  Swal.fire({
    title: countryName,
    text: countryCode,
    icon: 'success',
    confirmButtonText: 'OK'
  });
  })
});
