const reviewButton = document.querySelector(`.reviewButton`);
const reviewModalOverlay = document.querySelector(`#reviewModalOverlay`);
const closeReviewModal = document.querySelector(`.closeReviewModal`);
const reviewForm = document.querySelector(`#reviewForm`);

reviewButton.addEventListener("click", () => {
  reviewModalOverlay.classList.remove("hidden");
  document.body.classList.add("modal-active");
});

closeReviewModal.addEventListener("click", () => {
  reviewModalOverlay.classList.add("hidden");
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
  }
});

function showError(fieldName, message) {
  const field = reviewForm.querySelector(`[name="${fieldName}"]`);
  const errorElement = field
    ? field.closest(".form-group").querySelector(".error-message")
    : null;
  if (errorElement) errorElement.textContent = message;
}
