const form = document.getElementById('leadForm');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  if (name && email) {
    successMsg.style.display = 'block';
    form.reset();
  }
});