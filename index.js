// Form inputs
const email = document.getElementById("email");
const password = document.getElementById("password");
const zip = document.getElementById("zip");
const country = document.getElementById("country");
const submitBtn = document.getElementById("submit-btn");

// Error Containers
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".pw-error");
const zipError = document.querySelector(".zip-error");
const countryError = document.querySelector(".country-error");
console.log(emailError);
email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = "";
  } else {
    showEmailError();
  }
});
function showEmailError() {
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
}
