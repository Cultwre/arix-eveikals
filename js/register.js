const registerForm = document.querySelector(`#registerForm`);

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  registerForm
    .querySelectorAll(".error-message")
    .forEach((el) => (el.textContent = ""));

  const name = registerForm.registerName.value.trim();
  const email = registerForm.registerEmail.value.trim();
  const password = registerForm.registerPassword.value.trim();
  const repeatPassword = registerForm.registerRepeatPassword.value.trim();

  if (name === "") {
    registerForm.registerName.style.backgroundColor = "#fff";
    showError("registerName", "Lūdzu ievadi vārdu");
    isValid = false;
  } else {
    registerForm.registerName.style.backgroundColor = "#d4edda";
  }

  if (email === "" || !email.includes("@")) {
    registerForm.registerEmail.style.backgroundColor = "#fff";
    showError("registerEmail", "Lūdzu ievadi derīgu e-pastu");
    isValid = false;
  } else {
    registerForm.registerEmail.style.backgroundColor = "#d4edda";
  }

  if (password === "") {
    registerForm.registerPassword.style.backgroundColor = "#fff";
    showError("registerPassword", "Lūdzu ievadi paroli");
    isValid = false;
  } else if (password.length < 8) {
    registerForm.registerPassword.style.backgroundColor = "#fff";
    showError(
      "registerPassword",
      "Lūdzu ievadi paroli kura ir vismaz 8 simbolus gara"
    );
    isValid = false;
  } else {
    registerForm.registerPassword.style.backgroundColor = "#d4edda";
  }

  if (repeatPassword !== password) {
    registerForm.registerRepeatPassword.style.backgroundColor = "#fff";
    showError("registerRepeatPassword", "Paroles nesakrīt");
    isValid = false;
  } else if (repeatPassword === "") {
    registerForm.registerRepeatPassword.style.backgroundColor = "#fff";
    showError("registerRepeatPassword", "Lūdzu ievadi atkartoto paroli");
    isValid = false;
  } else {
    registerForm.registerRepeatPassword.style.backgroundColor = "#d4edda";
  }

  if (isValid) {
    window.location.href = "index.html";
  }
});

function showError(fieldName, message) {
  const field = registerForm.querySelector(`[name="${fieldName}"]`);
  const errorElement = field
    ? field.closest(".form-group").querySelector(".error-message")
    : null;
  if (errorElement) errorElement.textContent = message;
}
