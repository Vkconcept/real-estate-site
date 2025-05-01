// Scroll to top after reload
window.addEventListener('load', function () {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 100);
  });
  
  // Form submission handler
  function handleSubmit(event) {
    event.preventDefault();
    document.getElementById('successMessage').style.display = 'block';
    document.getElementById('questionForm').reset();
  }
  document.querySelectorAll('.navbar-collapse .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const toggler = document.querySelector('.navbar-toggler');
      const navbar = document.querySelector('.navbar-collapse');
      
      // Only trigger toggle if it's open (mobile view)
      if (window.getComputedStyle(toggler).display !== 'none' && navbar.classList.contains('show')) {
        toggler.click();
      }
    });
  });

  AOS.init();
