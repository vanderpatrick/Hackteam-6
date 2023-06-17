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
    document.getElementsByClassName('swal2-popup').setAttribute('style', 'background-image: url('+ eventDataFromApi.image_link +') !important');
};

export default popupModal;
