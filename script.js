const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (toggle) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
}
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});
document.querySelector("#apply-form").addEventListener("submit", e => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  document.querySelector(".form-message").textContent =
    `Thank you. Your application request for ${email} has been received.`;
  e.target.reset();
});
