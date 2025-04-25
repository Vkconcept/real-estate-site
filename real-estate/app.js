
window.onload = () => {
  if (window.location.hash) {
    window.history.replaceState(null, null, ' ');
  }
  window.scrollTo(0, 0);
};

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Back to Top button visibility toggle
const backToTopBtn = document.getElementById("backToTopBtn");
window.onscroll = () => {
  backToTopBtn.style.display = 
    (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
      ? "block" : "none";
};

// Counter animation logic
function animateCounter(el, target, duration = 2000) {
  let start = 0;
  let increment = Math.ceil(target / (duration / 20));
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      el.textContent = target.toLocaleString() + "+";
      clearInterval(timer);
    } else {
      el.textContent = start.toLocaleString() + "+";
    }
  }, 20);
}

// Animate counters when stats section becomes visible
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.count-up').forEach(el => {
        const target = parseInt(el.getAttribute('data-target'));
        animateCounter(el, target);
      });
      observer.disconnect(); // Only run once
    }
  });
}, { threshold: 0.6 });

observer.observe(document.querySelector("#stats-section"));

// Contact form handler
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const responseMessage = document.getElementById("responseMessage");

  responseMessage.style.display = "block";
  responseMessage.classList.remove("fadeOut");
  responseMessage.classList.add("fadeIn");

  this.reset();

  setTimeout(() => {
    responseMessage.classList.add("fadeOut");
    setTimeout(() => {
      responseMessage.style.display = "none";
      responseMessage.classList.remove("fadeOut");
    }, 1000);
  }, 3000);
});

