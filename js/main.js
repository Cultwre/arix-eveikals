// Funkcija HTML koda ielādēšanai
function loadHTML(elementId, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    });
}

// Ielādē Header un Footer uz ekrānu
window.addEventListener("DOMContentLoaded", () => {
  loadHTML("header", "header.html");
  loadHTML("footer", "footer.html");
});

let lastScrollY = window.scrollY;
const header = document.querySelector(`#header`);

// Funkcijua uz scroll header paradišanai un pazušanai
window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY && window.scrollY > 120) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }
  lastScrollY = window.scrollY;
});

// Funkcija header menu paradīšanai
function showHeaderMenu() {
  const headerMenu = document.querySelector(".headerMenu");

  headerMenu.classList.toggle("hidden");
}

// Funkcija, kas pievieno produktu lokala noliktava
function addToCart(addedProduct) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(addedProduct);

  localStorage.setItem("cart", JSON.stringify(cart));
}

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

const pageBody = document.querySelector(`body`);

function insertLoginModal() {
  pageBody.insertAdjacentHTML(
    `beforeend`,
    `
    <div id="loginModalOverlay" class="modalOverlay hidden">
      <div class="loginModal">
        <div class="loginModalControl">
          <span class="material-symbols-outlined closeLoginModal"> close </span>
        </div>
        <div class="loginInfo">
          <h1 class="loginModalTitle title">Pieslēgties</h1>
          <form id="loginForm">
            <div class="form-group text">
              <label for="loginEmail">E-pasts</label>
              <input
                type="email"
                id="loginEmail"
                class="loginFormInput"
                name="loginEmail"
                placeholder="Ievadi e-pastu"
              />
              <small class="error-message"></small>
            </div>
            <div class="form-group text">
              <label for="loginPassword">Parole</label>
              <input
                type="password"
                id="loginPassword"
                class="loginFormInput"
                name="loginPassword"
                placeholder="Ievadi paroli"
              />
              <small class="error-message"></small>
            </div>
            <button type="submit" class="mainButton loginButton">
              Ielogoties
            </button>
          </form>
          <a href="register.html"><button class="mainButton switchButton">Reģistrēties</button></a>
        </div>
      </div>
    </div>
    `
  );

  const loginModal = document.querySelector(`#loginModalOverlay`);
  const closeLoginModal = document.querySelector(`.closeLoginModal`);
  const loginForm = document.querySelector(`#loginForm`);

  closeLoginModal.addEventListener("click", () => {
    loginModal.classList.add("hidden");
    document.body.classList.remove("modal-active");
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    loginForm
      .querySelectorAll(".error-message")
      .forEach((el) => (el.textContent = ""));

    const email = loginForm.loginEmail.value.trim();
    const password = loginForm.loginPassword.value.trim();

    if (email === "" || !email.includes("@")) {
      loginForm.loginEmail.style.backgroundColor = "#fff";
      showError("loginEmail", "Lūdzu ievadi derīgu e-pastu");
      isValid = false;
    } else {
      loginForm.loginEmail.style.backgroundColor = "#d4edda";
    }

    if (password === "") {
      loginForm.loginPassword.style.backgroundColor = "#fff";
      showError("loginPassword", "Lūdzu ievadi paroli");
      isValid = false;
    } else if (password.length < 8) {
      loginForm.loginPassword.style.backgroundColor = "#fff";
      showError(
        "loginPassword",
        "Lūdzu ievadi paroli kura ir vismaz 8 simbolus gara"
      );
      isValid = false;
    } else {
      loginForm.loginPassword.style.backgroundColor = "#d4edda";
    }

    if (isValid) {
      loginForm.reset();
      loginForm.loginEmail.style.backgroundColor = "#fff";
      loginForm.loginPassword.style.backgroundColor = "#fff";

      loginModal.classList.add("hidden");
      document.body.classList.remove("modal-active");
    }
  });

  function showError(fieldName, message) {
    const field = loginForm.querySelector(`[name="${fieldName}"]`);
    const errorElement = field
      ? field.closest(".form-group").querySelector(".error-message")
      : null;
    if (errorElement) errorElement.textContent = message;
  }
}

insertLoginModal();

function openLoginModal() {
  let loginModal = document.querySelector(`#loginModalOverlay`);

  loginModal.classList.remove("hidden");
  document.body.classList.add("modal-active");
}
