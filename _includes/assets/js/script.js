const toggleButton = document.querySelector('.toggle-nav');
  const offcanvasNav = document.querySelector('.offcanvas');
  const closeNavButton = document.querySelector('.close-nav');
  
  toggleButton.addEventListener('click', function() {
    offcanvasNav.classList.toggle('open');
    toggleButton.classList.toggle('active');
  });
  
  function closeOffcanvasNav() {
    offcanvasNav.classList.remove('open');
    toggleButton.classList.remove('active');
  }
  
  document.addEventListener('click', function(event) {
    const targetElement = event.target;
    if (
      !offcanvasNav.contains(targetElement) &&
      targetElement !== toggleButton &&
      !toggleButton.contains(targetElement) &&
      targetElement !== closeNavButton
    ) {
      closeOffcanvasNav();
    }
  });
  
  closeNavButton.addEventListener('click', function() {
    closeOffcanvasNav();
  });
  



  document.addEventListener('touchstart', onTouchStart, {passive: true});




// Mobile menu toggle



// Accordion



// toggle





