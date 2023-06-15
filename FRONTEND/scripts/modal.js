
const handleTestEvent = (name) => {
  Swal.fire({
    title: name,
    text: 'This is a test event!',
    icon: 'info',
    confirmButtonText: 'OK'
  });
};



export default handleTestEvent;
