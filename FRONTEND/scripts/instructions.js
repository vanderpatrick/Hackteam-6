
// Instructions pop up on Map page
document.getElementById("instructionsButton").onclick = function () {

  Swal.fire({
    title: "Instructions",
    html: "<p>Welcome to the Out and About map, where you can engage with the interactive features we have curated.</p>" 
        +"<br>"
        + "Here are the instructions:</p>"
        +"<br>"
        +"<p><b>ZOOM IN / OUT:</b> Use the scroll wheel on your mouse or press the +/- keys on the keyboard.</p>"
        +"<br>"
        +"<p><b>MOVE:</b> Click & hold the left mouse button to drag the screen or use the arrow keys to move.</p>"
        +"<br>"
        +"<p><b>CLICK:</b> Left click on countries to see the information.</p>"
        +"<br>"
        +"<p>Enjoy learning about the rich LGBTQ+ history from around the world using the 3D world map!</p>"
        +"<br>"
        +"<p><small><em>Note: Some countries do not have any information regarding the history of the LGBTQ+ movements.</small></em></p>"
        +"<br>",
    confirmButtonText: "Close",
  });
};