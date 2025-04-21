document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const messageBox = document.getElementById("formMessage");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
  
      if (!name || !email || !message) {
        messageBox.textContent = "Please fill in all fields!";
        messageBox.style.color = "red";
      } else {
        messageBox.textContent = "Message sent successfully! 🐾";
        messageBox.style.color = "green";
        form.reset();
      }
    });
  });
  AOS.init();
  const swiper = new Swiper('.swiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });
    function showPopup() {
      document.getElementById('newsletter-popup').style.display = 'block';
    }
    
    function closePopup() {
     document.getElementById('newsletter-popup').style.display = 'none';
    }
    
    window.onload = function() {
      setTimeout(showPopup, 5000); // Show popup after 5 seconds
    };
    
    document.getElementById('newsletter-form').addEventListener('submit', function(e) {
      e.preventDefault();
      // Handle form submission (e.g., send to server or display a thank-you message)
      closePopup();
    });
    const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;
  
  // Set initial theme
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
  } else {
    body.classList.add('light-mode');
  }
  
  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  });
   function showPopup() {
    document.getElementById('newsletter-popup').style.display = 'block';
  }
  
  function closePopup() {
  document.getElementById('newsletter-popup').style.display = 'none';
  }
  
  window.onload = function() {
    setTimeout(showPopup, 5000); // Show popup after 5 seconds
  };
  
  document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Handle form submission (e.g., send to server or display a thank-you message)
    closePopup();
  });
  
  