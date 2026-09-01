// Personalise these links before publishing.
const portfolio = {
  email: "your.email@example.com",
  github: "#",
  linkedin: "#"
};

document.querySelectorAll('a[href^="mailto:"]').forEach(a => a.href = `mailto:${portfolio.email}`);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav-links");
menu?.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "" : "flex";
  if (nav.style.display === "flex") {
    nav.style.position = "absolute";
    nav.style.top = "76px";
    nav.style.left = "20px";
    nav.style.right = "20px";
    nav.style.flexDirection = "column";
    nav.style.padding = "20px";
    nav.style.background = "rgba(20,20,33,.98)";
    nav.style.border = "1px solid rgba(255,255,255,.1)";
    nav.style.borderRadius = "14px";
  }
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 850) nav.style.display = "";
  });
});

// Subtle pointer tilt on the code card.
const codeCard = document.querySelector(".code-card");
document.querySelector(".hero-art")?.addEventListener("mousemove", e => {
  if (!codeCard || window.innerWidth < 850) return;
  const r = e.currentTarget.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - .5;
  const y = (e.clientY - r.top) / r.height - .5;
  codeCard.style.transform = `rotate(${2 + x * 4}deg) translate(${x * 4}px, ${y * 4}px)`;
});
document.querySelector(".hero-art")?.addEventListener("mouseleave", () => {
  if (codeCard) codeCard.style.transform = "rotate(2deg)";
});
