const popupModal = (eventDataFromApi) => {
  Swal.fire({
    title: eventDataFromApi.event,
    html:
      '<p>' + eventDataFromApi.date + '</p>' + '<br/>' +
      '<p>' + eventDataFromApi.country + ',' + eventDataFromApi.region + '</p>' + '<br/>' +
      eventDataFromApi.description,
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText:
      'Exit',
    confirmButtonAriaLabel: 'Exit',
  })
};

export default popupModal;
