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
email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = "";
  } else {
    emailError.style.display = "block";
    showEmailError();
  }
});
password.addEventListener("input", (event) => {
  if (password.validity.valid) {
    passwordError.textContent = "";
  } else {
    passwordError.style.display = "block";
    showPasswordError();
  }
});
zip.addEventListener("input", (event) => {
  if (zip.validity.valid) {
    zipError.textContent = "";
  } else {
    zipError.style.display = "block";
    showZipError();
  }
});
country.addEventListener("input", (event) => {
  if (country.validity.valid) {
    countryError.textContent = "";
  } else {
    countryError.style.display = "block";
    showCountryError();
  }
});
// Blur event listeners
// Hide errors when not on the input
email.addEventListener("blur", (event) => {
  emailError.style.display = "none";
});
password.addEventListener("blur", (event) => {
  passwordError.style.display = "none";
});
zip.addEventListener("blur", (event) => {
  zipError.style.display = "none";
});
country.addEventListener("blur", (event) => {
  countryError.style.display = "none";
});

function showEmailError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "This is a required field.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be a valid email.";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Entered value should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  } else {
    emailError.textContent = "";
  }
}

function showPasswordError() {
  if (password.validity.valueMissing) {
    passwordError.textContent = "This is a required field.";
  } else if (password.validity.typeMismatch) {
    passwordError.textContent = "Entered value needs to be a valid password.";
  } else if (password.validity.tooShort) {
    passwordError.textContent = `Entered value should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
  } else {
    passwordError.textContent = "";
  }
}

function showZipError() {
  if (zip.validity.valueMissing) {
    zipError.textContent = "This is a required field.";
  } else if (zip.validity.patternMismatch) {
    zipError.textContent = "Please enter a valid 5-digit zip code";
  } else {
    zipError.textContent = "";
  }
}

function showCountryError() {
  if (country.validity.valueMissing) {
    countryError.textContent = "This is a required field.";
  } else {
    countryError.textContent = "";
  }
}
