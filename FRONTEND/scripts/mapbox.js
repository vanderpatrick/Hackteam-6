import requestCountry from "./country-search.js";

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
    zoom: 1,
   
    renderWorldCopies: false,
    
    boxZoom: false,
    doubleClickZoom: false,
    projection: "globe",
    style: {
        version: 8,
        sources: {},
        layers: [
            {
                id: "background",
                type: "background",
                paint: { "background-color": "#0f172a" },
            },
        ],
    },
});


let features = [];
$.ajax({
    type: "GET",
    url: "https://pride-api.onrender.com/api/events",
    success: function (eventsDataFromApi) {
        // get country for event from api
        for (let eventFromApi in eventsDataFromApi) {
            // get values for event from api
            let lat = eventsDataFromApi[eventFromApi].lat;
            let long = eventsDataFromApi[eventFromApi].long;
            let country = eventsDataFromApi[eventFromApi].country;
            let region = eventsDataFromApi[eventFromApi].region;
            features.push({
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [long, lat],
                },
                properties: {
                    title: country,
                    description: region,
                },
            });

            // Create geojson feature
            const geojson = {
                type: "FeatureCollection",
                features: features,
            };

            // Loop through and add markers
            for (const feature of geojson.features) {
                // create a HTML element for each feature
                const el = document.createElement("div");
                el.className = "marker";

                // make a marker for each feature and add it to the map
                new mapboxgl.Marker(el)
                    .setLngLat(feature.geometry.coordinates)
                    .addTo(map);
            }
        }
    },
    error: function (jqXHR, textStatus, errorThrown) {
        // Handle other error cases
        console.log("AJAX request error:", textStatus, errorThrown);
        Swal.fire({
            title: "Error",
            text: "An error occurred while fetching markers for the map. Please try again later.",
            confirmButtonText: "Close",
            icon: "error",
        });
    },
});


map.on("load", () => {
    map.setFog({});

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
        // make call to api for events data
        requestCountry(mapCountryName);
    });
});
