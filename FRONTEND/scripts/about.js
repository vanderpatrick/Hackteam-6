document.getElementById("readbutton").onclick = function () {

    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var button = document.getElementById("readbutton");

    if (dots.classList.contains("hidden")) {
        // Show the dots
        dots.classList.remove("hidden");

        // Hide the more text
        moreText.classList.add("hidden");
        
        // change text of the button
        button.innerHTML = "Read more";
    } else {
        // Hide the dots
        dots.classList.add("hidden");

        // Hide the more text
        moreText.classList.remove("hidden");

        // Change text of the button
        button.innerHTML = "Read less";
    }

    
}