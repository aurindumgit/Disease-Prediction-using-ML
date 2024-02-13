document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbarLinks = document.getElementById('navbar-links');
    const teamSlider = document.getElementById('team-slider');
    const closeBtn = document.getElementById('close-btn');
  
    menuIcon.addEventListener('click', function () {
        navbarLinks.classList.toggle('active');
        teamSlider.style.display = teamSlider.style.display === 'block' ? 'none' : 'block';
    });
  
    closeBtn.addEventListener('click', function () {
        navbarLinks.classList.remove('active');
        teamSlider.style.display = 'none';
    });
  });
  
  
  
  document.addEventListener('DOMContentLoaded', function () {
    const textOverlay = document.getElementById('text-overlay');
    const welcomeText = "Welcome to GG Chatbot. Let's get started!";
    let index = 0;
  
    function type() {
        textOverlay.textContent += welcomeText[index];
        index++;
  
        if (index === welcomeText.length) {
            setTimeout(resetText, 2000); 
        } else {
            setTimeout(type, 70); 
        }
    }
  
    function resetText() {
        textOverlay.textContent = '';
        index = 0;
        setTimeout(type, 70);
    }
  
  
    type();
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const backToTopBtn = document.getElementById('backToTopBtn');
  
    
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    };
  
    
    backToTopBtn.onclick = function () {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    };
  });
  
  function toggleScrollbarColor() {
      const scrollbarThumb = document.querySelector('body::-webkit-scrollbar-thumb');
  
      
      if (scrollbarThumb.style.backgroundColor === 'black') {
          scrollbarThumb.style.backgroundColor = 'blue';
      } else {
          scrollbarThumb.style.backgroundColor = 'black';
      }
  }
  
  
  
  
  
  