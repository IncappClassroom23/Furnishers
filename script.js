
  //Google Sheet connect code
  var scriptURL = "https://script.google.com/macros/s/AKfycbyfNxaL2WiwNatnDz5noVy7TtXGvmC9UnrjyRguu3iivCVrRVR0aNXEkJ-KMOFa4bfomA/exec";
  var form = document.forms['google-sheet'];
  form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
  });

  var form2 = document.forms['google-sheet2'];
  form2.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form2)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
  });
