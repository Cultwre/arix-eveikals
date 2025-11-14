const cartProductContainer = document.querySelector(`.cartProductContainer`);
const cartPrice = document.querySelector(`.overallPrice`);
const openOrderModal = document.querySelector(`.orderPlacingButton`);
const modalOverlay = document.querySelector(`.modalOverlay`);
const orderModal = document.querySelector(`.orderModal`);
const closeOrderModal = document.querySelector(`.closeOrderModal`);
const form = document.querySelector(`#orderForm`);
const orderPrice = document.querySelector(`.orderPrice`);

const successButton = document.querySelector(`.successOk`);
const successModalOverlay = document.querySelector(`#successModalOverlay`);
const closeSuccessModal = document.querySelector(`.closeSuccessModal`);
const successModal = document.querySelector(`.successModal`);
let fullPrice = 0;
// Funkcija produktu parādīšanai grozā
function showCartProduct() {
  cartProductContainer.innerHTML = "";

  // Saņem produktus mainīgājā
  let cartItems = getCart();

  if (cartItems.length === 0) {
    // Ievieto ziņu, ka grozs ir tukšs ja tur nav produktu
    cartProductContainer.insertAdjacentHTML(
      `beforeend`,
      `
         <span class="noneFound text cartNoneFound">Grozs ir tukšs</span>  
            `
    );
  } else {
    // Pievieno vizuāli produktus grozā
    cartItems.forEach((e, i) => {
      cartProductContainer.insertAdjacentHTML(
        `beforeend`,
        `
         <div class="cartProduct">
              <img src="${e.imageUrl}" />
              <div class="cartProductInfo">
                <div class="cartProductNameAndBrand">
                  <h1 class="cartProductBrand text">${e.brand}</h1>
                  <h2 class="cartProductModel text">
                    ${e.name}
                  </h2>
                </div>
                <div class="cartProductTools">
                  <button class="deleteButton mainButton" data-id="${i}">Izņemt</button>
                  <h1 class="cartProductPrice text">${e.price}€</h1>
                </div>
              </div>
            </div>   
            `
      );
    });

    let removeButtons = document.querySelectorAll(`.deleteButton`);

    removeButtons.forEach((e) => {
      e.addEventListener(`click`, () => {
        removeProduct(e.dataset.id);
        showToast("Produkts tika veiksmīgi izņemts no groza");
      });
    });
  }
  updateCartPrice(cartItems);
}

showCartProduct();

// Funkcija produkta dzēšanai no groza
function removeProduct(index) {
  let currentCart = getCart();

  currentCart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(currentCart));
  showCartProduct();
}

// Funkcija groza cenas izreķināšanai
function updateCartPrice(cartItems) {
  fullPrice = 0;

  cartItems.forEach((e) => {
    fullPrice += parseFloat(e.price.replace(`,`, `.`));
    fullPrice = +fullPrice.toFixed(2);
  });

  cartPrice.textContent = `${fullPrice.toFixed(2)}€`;
  orderPrice.textContent = `${fullPrice.toFixed(2)}€`;
}

// Funkcija modāla loga atveršanai
openOrderModal.addEventListener("click", () => {
  modalOverlay.classList.remove("hidden");
  document.body.classList.add("modal-active");
});

// Funkcija modāla loga aizveršanai
closeOrderModal.addEventListener("click", () => {
  modalOverlay.classList.add("hidden");
  orderModal.classList.remove("in-view");
  document.body.classList.remove("modal-active");
});

// Funkcijas modāla loga aizveršanai
closeSuccessModal.addEventListener("click", () => {
  successModalOverlay.classList.add("hidden");
  document.body.classList.remove("modal-active");
});

successButton.addEventListener("click", () => {
  successModalOverlay.classList.add("hidden");
  document.body.classList.remove("modal-active");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  // Izdzēst visas kļūdas tekstus
  form
    .querySelectorAll(".error-message")
    .forEach((el) => (el.textContent = ""));

  const name = form.name.value.trim();
  const surname = form.surname.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const address = form.adress.value.trim();
  const payment = form.querySelector('input[name="payment"]:checked');

  // Validācija
  if (name === "") {
    form.name.style.backgroundColor = "#fff";
    showError("name", "Lūdzu ievadi savu vārdu");
    isValid = false;
  } else {
    form.name.style.backgroundColor = "#d4edda";
  }

  if (surname === "") {
    form.surname.style.backgroundColor = "#fff";
    showError("surname", "Lūdzu ievadi savu Uzvārdu");
    isValid = false;
  } else {
    form.surname.style.backgroundColor = "#d4edda";
  }

  if (email === "" || !email.includes("@")) {
    form.email.style.backgroundColor = "#fff";
    showError("email", "Lūdzu ievadi derīgu e-pastu");
    isValid = false;
  } else {
    form.email.style.backgroundColor = "#d4edda";
  }

  if (phone === "" || phone.length !== 8) {
    form.phone.style.backgroundColor = "#fff";
    showError("phone", "Lūdzu ievadi derīgu telefona numuru");
    isValid = false;
  } else {
    form.phone.style.backgroundColor = "#d4edda";
  }

  if (address === "") {
    form.adress.style.backgroundColor = "#fff";
    showError("adress", "Lūdzu ievadi piegādes adresi");
    isValid = false;
  } else {
    form.adress.style.backgroundColor = "#d4edda";
  }

  if (!payment) {
    const paymentError = form
      .querySelector('input[name="payment"]')
      .closest(".form-group")
      .querySelector(".error-message");
    paymentError.textContent = "Lūdzu izvēlies apmaksas veidu";
    isValid = false;
  }

  if (isValid) {
    form.reset();
    form.name.style.backgroundColor = "#fff";
    form.surname.style.backgroundColor = "#fff";
    form.email.style.backgroundColor = "#fff";
    form.phone.style.backgroundColor = "#fff";
    form.adress.style.backgroundColor = "#fff";

    modalOverlay.classList.add("hidden");
    document.body.classList.remove("modal-active");

    successModalOverlay.classList.remove("hidden");
    successModal.classList.remove("in-view");
  }
});

// Funkcija kļūdu parādīšanai
function showError(fieldName, message) {
  const field = form.querySelector(`[name="${fieldName}"]`);
  const errorElement = field
    ? field.closest(".form-group").querySelector(".error-message")
    : null;
  if (errorElement) errorElement.textContent = message;
}

// Funkcija pop up ziņojuma parādīšanai
function showToast(message) {
  const container = document.getElementById("toast-container");

  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.classList.add("text");
  toast.innerText = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}
