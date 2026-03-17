emailjs.init("TrDJ0Gq8fKTZhJX46");

const form = document.getElementById("leadForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const templateParams = {
    name: name,
    email: email,
  };

  emailjs
    .send("service_0j01iu6", "template_kzegk8g", templateParams)
    .then(function () {
      successMsg.style.display = "block";
      form.reset();
    })
    .catch(function (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    });
});