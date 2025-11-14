const reviewButton = document.querySelector(`.reviewButton`);
const successButton = document.querySelector(`.successOk`);
const reviewModalOverlay = document.querySelector(`#reviewModalOverlay`);
const successModalOverlay = document.querySelector(`#successModalOverlay`);
const closeReviewModal = document.querySelector(`.closeReviewModal`);
const closeSuccessModal = document.querySelector(`.closeSuccessModal`);
const reviewForm = document.querySelector(`#reviewForm`);
const reviewModal = document.querySelector(`.reviewModal`);
const successModal = document.querySelector(`.successModal`);

// Jautājuma modāla loga aiveršana un atvēršana
reviewButton.addEventListener("click", () => {
  reviewModalOverlay.classList.remove("hidden");
  reviewModal.classList.remove("in-view");
  document.body.classList.add("modal-active");
});

closeReviewModal.addEventListener("click", () => {
  reviewModalOverlay.classList.add("hidden");
  document.body.classList.remove("modal-active");
});

// Veiksmes modāla loga aizveršana
closeSuccessModal.addEventListener("click", () => {
  successModalOverlay.classList.add("hidden");
  document.body.classList.remove("modal-active");
});

successButton.addEventListener("click", () => {
  successModalOverlay.classList.add("hidden");
  document.body.classList.remove("modal-active");
});

reviewForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  reviewForm
    .querySelectorAll(".error-message")
    .forEach((el) => (el.textContent = ""));

  const email = reviewForm.reviewEmail.value.trim();
  const text = reviewForm.reviewText.value.trim();

  // Validācija
  if (email === "" || !email.includes("@")) {
    reviewForm.reviewEmail.style.backgroundColor = "#fff";
    showError("reviewEmail", "Lūdzu ievadi derīgu e-pastu");
    isValid = false;
  } else {
    reviewForm.reviewEmail.style.backgroundColor = "#d4edda";
  }

  if (text === "") {
    reviewForm.reviewText.style.backgroundColor = "#fff";
    showError("reviewText", "Lūdzu ievadi jautājumu");
    isValid = false;
  } else {
    reviewForm.reviewText.style.backgroundColor = "#d4edda";
  }

  if (isValid) {
    reviewForm.reset();
    reviewForm.reviewEmail.style.backgroundColor = "#fff";
    reviewForm.reviewText.style.backgroundColor = "#fff";

    reviewModalOverlay.classList.add("hidden");
    document.body.classList.remove("modal-active");

    successModalOverlay.classList.remove("hidden");
    successModal.classList.remove("in-view");
  }
});

// Funkcija kļūdu parādīšanai
function showError(fieldName, message) {
  const field = reviewForm.querySelector(`[name="${fieldName}"]`);
  const errorElement = field
    ? field.closest(".form-group").querySelector(".error-message")
    : null;
  if (errorElement) errorElement.textContent = message;
}
