const faqButtons = document.querySelectorAll(".faqQuestion");

faqButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;

    // Aizver citas atvērtās atbildes
    document.querySelectorAll(".faqAnswer").forEach((item) => {
      if (item !== answer) item.classList.remove("show");
    });

    // Pārslēdz izvēlēto
    answer.classList.toggle("show");
  });
});
