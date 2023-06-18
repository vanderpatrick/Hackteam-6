const popupModal = (eventDataFromApi) => {
  console.log(eventDataFromApi.image_link)
    Swal.fire({
        title: eventDataFromApi.event,
        html:
            "<div >" +
            "<p>" +
            eventDataFromApi.date +
            "</p>" +
            "<br/>" +
            "<p>" +
            eventDataFromApi.country +
            ", " +
            eventDataFromApi.region +
            "</p>" +
            "<br/>" +
            eventDataFromApi.description +
            "</div>",
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: "Exit",
        confirmButtonAriaLabel: "Exit",
    });
};

export default popupModal;
