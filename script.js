const LEAD_WEBHOOK_URL = "https://cloud.activepieces.com/api/v1/webhooks/y7dKTpbTLpdTAFp0O0d04";

const FORM_MESSAGES = {
  lv: {
    sending: "Nosūta...",
    success: "Paldies! Pieteikums ir saņemts. Pēc formas aizpildīšanas sazināmies 5 minūšu laikā!",
    error: "Pieteikumu neizdevās nosūtīt. Lūdzu, mēģiniet vēlreiz.",
  },
  en: {
    sending: "Sending...",
    success: "Thank you! Your enquiry has been received. We will contact you within five minutes!",
    error: "Your enquiry could not be sent. Please try again.",
  },
  ru: {
    sending: "Отправка...",
    success: "Спасибо! Ваша заявка получена. Мы свяжемся с вами в течение пяти минут!",
    error: "Не удалось отправить заявку. Пожалуйста, попробуйте ещё раз.",
  },
};

function getFormMessages() {
  const language = document.documentElement.lang.toLowerCase().split("-")[0];
  return FORM_MESSAGES[language] || FORM_MESSAGES.lv;
}

async function submitLeadForm(form) {
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const messages = getFormMessages();
  const status = form.querySelector(".form-status");
  const button = form.querySelector('button[type="submit"]');
  const originalButtonText = button?.textContent || "";
  const fields = Object.fromEntries(new FormData(form).entries());
  const payload = {
    ...fields,
    page_url: window.location.href,
    page_title: document.title,
    language: document.documentElement.lang || "lv",
    submitted_at: new Date().toISOString(),
  };

  if (button) {
    button.disabled = true;
    button.textContent = messages.sending;
  }
  if (status) {
    status.textContent = messages.sending;
    status.className = "form-status is-pending";
  }

  try {
    const response = await fetch(LEAD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Webhook returned HTTP ${response.status}`);
    }

    form.reset();
    if (status) {
      status.textContent = messages.success;
      status.className = "form-status is-success";
    }
  } catch (error) {
    console.error("Lead form submission failed:", error);
    if (status) {
      status.textContent = messages.error;
      status.className = "form-status is-error";
    }
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = originalButtonText;
    }
  }
}

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

  document.querySelectorAll("[data-lead-form]").forEach((form) => {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      await submitLeadForm(form);
    });
  });

  document.querySelectorAll(".faq-q").forEach((question) => {
    question.addEventListener("click", () => {
      const item = question.closest(".faq-item");
      const wasOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach((openItem) => {
        openItem.classList.remove("open");
        openItem.querySelector(".faq-q")?.setAttribute("aria-expanded", "false");
      });
      if (!wasOpen) {
        item.classList.add("open");
        question.setAttribute("aria-expanded", "true");
      }
    });
  });

  const header = document.getElementById("siteHeader");
  const floating = document.getElementById("floatCta");
  window.addEventListener("scroll", () => {
    header?.classList.toggle("scrolled", window.scrollY > 60);
    floating?.classList.toggle("visible", window.scrollY > 360);
  }, { passive: true });
});
