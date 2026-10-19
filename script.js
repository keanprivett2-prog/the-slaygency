
/* ==========================================
   THE SLAYGENCY — MAIN JAVASCRIPT
   ========================================== */

// Automatically update copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();


// Mobile navigation
const menu = document.querySelector(".mobile-menu");
const nav = document.querySelector(".links");

menu.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  });
});


/* Close mobile navigation when clicking outside */
document.addEventListener("click", (event) => {
  if (
    nav.classList.contains("open") &&
    !nav.contains(event.target) &&
    !menu.contains(event.target)
  ) {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  }
});

/* Close mobile navigation with Escape key */
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("open")) {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
    menu.focus();
  }
});



// ==========================================
// CONTACT FORM — TEMPORARY BEHAVIOUR
// Resend integration will be added later
// ==========================================

const enquiryForm = document.getElementById("enquiry");
const formStatus = document.getElementById("form-status");

enquiryForm.addEventListener("submit", (event) => {
  event.preventDefault();

  formStatus.className = "form-status";

  formStatus.textContent =
    "Our enquiry form is being prepared. Please email enquiry.theslaygency@gmail.com in the meantime.";
});


/* ==========================================
   SCROLL REVEAL ANIMATIONS
   ========================================== */

if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const revealElements = document.querySelectorAll(
    ".section-head, .service, .about-inner, .sample, .contact-inner"
  );

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08
    }
  );

  revealElements.forEach((element) => {
    element.classList.add("reveal");
    revealObserver.observe(element);
  });

  document.documentElement.classList.add("js-reveal-ready");
}
