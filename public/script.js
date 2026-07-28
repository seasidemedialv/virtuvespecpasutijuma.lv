document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("mobBtn");
  const nav = document.getElementById("mobNav");
  if (button && nav) {
    button.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      button.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      nav.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
    }));
  }

  document.querySelectorAll("[data-demo-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let message = form.querySelector(".demo-message");
      if (!message) {
        message = document.createElement("p");
        message.className = "demo-message";
        message.textContent = "Šī ir priekšskatījuma forma. Dati netika nosūtīti.";
        form.appendChild(message);
      }
      message.classList.add("visible");
    });
  });
});
