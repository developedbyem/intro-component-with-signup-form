const form = document.querySelector("#form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

// validate inputs of a form
function formValidation() {
  if (firstName.value === "") {
    showError(firstName, "First Name cannot be empty");
  } else {
    showSuccess(firstName);
  }
  if (lastName.value === "") {
    showError(lastName, "Last Name cannot be empty");
  } else {
    showSuccess(lastName);
  }
  if (email.value === "") {
    showError(email, "email cannot be empty");
  } else if (
    !email.value.match(/^[A-Za-z\_\-0-9]*[@][A-Za-z]*[\.][a-z]{3,4}$/)
  ) {
    showError(email, "Looks like this is not an email");
    email.style.color = "var(--clr-red)";
  } else {
    showSuccess(email);
  }
  if (password.value === "") {
    showError(password, "Password cannot be empty");
  } else {
    showSuccess(password);
  }
}
// show errors for each input
function showError(input, message) {
  input.parentElement.classList.add("error");
  const error = input.parentElement.querySelector("small");
  error.textContent = message;
  error.style.display = "block";
}
// show success
function showSuccess(input) {
  input.parentElement.classList.remove("error");
  input.nextElementSibling.style.display = "none";
  email.style.color = "var(--clr-neutral-blue-900)";
}
// submit form
form.addEventListener("submit", function (e) {
  e.preventDefault();
  formValidation();
});
