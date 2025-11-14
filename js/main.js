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

// Funkcija groza produktu iegūšanai no lokālas noliktavas
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

const pageBody = document.querySelector(`body`);

// Funkcija kas izveidot pieslēgšanas modālo logu
function insertLoginModal() {
  pageBody.insertAdjacentHTML(
    `beforeend`,
    `
    <div id="loginModalOverlay" class="modalOverlay hidden">
      <div class="loginModal reveal">
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
  const loginModalItself = document.querySelector(`.loginModal`);
  const closeLoginModal = document.querySelector(`.closeLoginModal`);
  const loginForm = document.querySelector(`#loginForm`);

  // Funkcija pieslēgšanas loga slēpšanai
  closeLoginModal.addEventListener("click", () => {
    loginModal.classList.add("hidden");
    loginModalItself.classList.remove("in-view");

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

    //Validācija
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

  // Funkcija kļūdas paradīšanai
  function showError(fieldName, message) {
    const field = loginForm.querySelector(`[name="${fieldName}"]`);
    const errorElement = field
      ? field.closest(".form-group").querySelector(".error-message")
      : null;
    if (errorElement) errorElement.textContent = message;
  }
}

insertLoginModal();

// Funkcija pieslēgšanas loga paradīšanai
function openLoginModal() {
  let loginModal = document.querySelector(`#loginModalOverlay`);

  loginModal.classList.remove("hidden");
  document.body.classList.add("modal-active");
}

let moreProducts = false;

// Funkcija, kas pēc ievadīta teksta (arguments), atrod produktus
function searchProducts(query) {
  if (query.length === 0 || query[0] == " ") {
    hideSearch();
  } else {
    query = query.toLowerCase().trim();

    // Atlasas produktus, kuru nosaukumos ir ievādīts teksts (tā kā LIKE sql vidē)
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );

    displayProducts(results);
  }
}

// Funkcija produktu paradīšanai konteineri zem meklēšanas ievadlauka
function displayProducts(items) {
  // Paņem tikai 5 pirmos atrastos produktus
  if (items.length > 5) {
    moreProducts = true;
    items = items.slice(0, 5);
  } else {
    moreProducts = false;
  }

  let searchWindow = document.querySelector(`.searchMenu`);

  if (searchWindow.classList.contains(`hidden`)) {
    searchWindow.classList.remove(`hidden`);
  }

  searchWindow.innerHTML = "";

  // Ievieto atlasītos produktus
  if (items.length !== 0) {
    items.forEach((e) => {
      searchWindow.insertAdjacentHTML(
        "beforeend",
        `
      <a href="product.html?id=${e.id}" class='searchProduct'>
        <div class="searchFirstHalf">
          <div class="searchImgContainer">
            <img src="${e.imageUrl}"/>
          </div>
          <span class='text'>${e.name}</span>
        </div>
        <div class="searchFirstHalf">
          <span class='text searchPrice'>${e.price}€</span>
        </div>
      </a>
    `
      );
    });

    // Ja tika atrasti vairāk neka 5 produkti, zem atrastiem produktiem parādas poga, kas ved uz katalogu
    if (moreProducts === true) {
      searchWindow.insertAdjacentHTML(
        "beforeend",
        `
      <a href="catalog.html" class='moreProducts'>
        <button class="mainButton">Apskatīt katalogu</button>
      </a>
    `
      );
    }
  } else {
    // Ja produkti netika atrasti, parāda attiecīgo paziņojumu
    searchWindow.insertAdjacentHTML(
      "beforeend",
      `
      <span class="noneFound text">Produkti netika atrasti</span>
    `
    );
  }
}

// Funkcija meklēšanas konteinera paslēpšanai
function hideSearch() {
  let searchWindow = document.querySelector(`.searchMenu`);

  setTimeout(() => {
    searchWindow.classList.add(`hidden`);
  }, 100);
}

// Funkcija, kas izmanto iebuvēto API, kura ļauj javascript konstantēt redzamos elementus uz ekrāna
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // ja elements ir redzams vismaz uz 15% (threshold 0.15), tad pievieno elementam klasi in-view
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  },
  { threshold: 0.15 }
);

// Katru elementu ar klasi .reveal, sāk "novērot"
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
