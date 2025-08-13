document.addEventListener("DOMContentLoaded", () => {
  const totalEl = document.querySelector(".total");

  function parsePrice(text) {
    // Extract numeric value from strings like "100 $"
    const n = parseFloat(text.replace(/[^\d.]+/g, ""));
    return isNaN(n) ? 0 : n;
  }

  function recalcTotal() {
    let total = 0;
    document.querySelectorAll(".list-products .card").forEach((card) => {
      const unitPrice = parsePrice(card.querySelector(".unit-price").textContent);
      const qty = parseInt(card.querySelector(".quantity").textContent) || 0;
      total += unitPrice * qty;
    });
    totalEl.textContent = `${total} $`;
  }

  // Wire up each product card
  document.querySelectorAll(".list-products .card").forEach((card) => {
    const plus = card.querySelector(".fa-plus-circle");
    const minus = card.querySelector(".fa-minus-circle");
    const qtyEl = card.querySelector(".quantity");
    const trash = card.querySelector(".fa-trash-alt");
    const heart = card.querySelector(".fa-heart");

    plus.addEventListener("click", () => {
      qtyEl.textContent = (parseInt(qtyEl.textContent) || 0) + 1;
      recalcTotal();
    });

    minus.addEventListener("click", () => {
      const current = parseInt(qtyEl.textContent) || 0;
      if (current > 0) {
        qtyEl.textContent = current - 1;
        recalcTotal();
      }
    });

    trash.addEventListener("click", () => {
      // Remove the outer wrapper that holds this .card
      const wrapper = card.parentElement; // this is the outer .card-body wrapper in the provided HTML
      if (wrapper) wrapper.remove();
      recalcTotal();
    });

    heart.addEventListener("click", () => {
      // Use Bootstrap utility to toggle red color
      heart.classList.toggle("text-danger");
    });
  });

  // Initial total (in case some quantities are preset)
  recalcTotal();
});
