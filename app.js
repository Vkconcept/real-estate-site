window.onload = function() {
  // Remove the hash from the URL (if it exists)
  if (window.location.hash) {
    window.history.replaceState(null, null, ' ');
  }
  
  // Ensure the page starts at the top
  window.scrollTo(0, 0);
};
  // Counter Animation
  function animateCounter(el, target, duration = 2000) {
    let start = 0;
    let increment = Math.ceil(target / (duration / 20)); // adjust based on duration
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        el.textContent = target.toLocaleString() + "+"; // Format number
        clearInterval(timer);
      } else {
        el.textContent = start.toLocaleString() + "+";
      }
    }, 20);
  }
  

  // Trigger when section is visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.count-up').forEach(el => {
          const target = parseInt(el.getAttribute('data-target'));
          animateCounter(el, target);
        });
        observer.disconnect(); // Run once
      }
    });
  }, { threshold: 0.6 });

  observer.observe(document.querySelector("#stats-section"));


  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }// Form submission handler
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting (no page reload)

  // Get the response message element
  var responseMessage = document.getElementById("responseMessage");
  
  // Show the response message with animation
  responseMessage.style.display = "block";
  responseMessage.classList.remove("fadeOut"); // Remove any existing fade-out animation
  responseMessage.classList.add("fadeIn"); // Add pop-up animation

  // Reset the form fields
  document.getElementById("contactForm").reset();

  // Optional: Hide the message after a few seconds
  setTimeout(function() {
    responseMessage.classList.add("fadeOut"); // Apply fade-out animation

    // After the fade-out is complete, hide the message again
    setTimeout(function() {
      responseMessage.style.display = "none"; // Hide the message after fade-out
      responseMessage.classList.remove("fadeOut"); // Reset the fade-out class
    }, 1000); // Wait for the fade-out animation to finish (1 second)
    
  }, 3000); // Fade-out after 3 seconds
});
