const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  const jsonData = JSON.stringify(Object.fromEntries(formData));
  if (Object.fromEntries(formData).email == "" || Object.fromEntries(formData).country == "" || Object.fromEntries(formData).description == "") {
    Swal.fire('Error', "Don't leave any fields blank, please! We want as much information as possible.", 'error');
    return;
  } else {

  fetch('https://pride-api.onrender.com/api/contacts', {
    method: 'POST',
    body: jsonData,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      Swal.fire('Success', "Thanks for sending in your response! We'll check the information you've provided and if it checks out, you'll see it uploaded onto our map soon!", 'success');
    })
    .catch(error => {
      console.error(error);
      Swal.fire('Error', 'An error occurred while submitting the form.', 'error');
    });
  }
  form.reset();
});