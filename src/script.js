document.getElementById('cisco').addEventListener('click', function() {
    window.open('https://www.credly.com/badges/fb1aeaa2-cae2-443f-ae4d-130ef0aeb3c2/linked_in_profile', '_blank');
});

document.getElementById('amazon').addEventListener('click', function() {
    window.open('https://credentials.itcollege.com.ar/97bc11cb-9dee-4452-bfa0-534e48147e94#gs.ubjubt', '_blank');
});

document.getElementById('microsoft').addEventListener('click', function() {
  window.open('https://credentials.itcollege.com.ar/b81a0726-23ee-43b7-9fbc-9a6e1c05c429#gs.ubglyk', '_blank');
});

document.getElementById('lifecole').addEventListener('click', function() {
  window.open('https://www.lifecole.com/', '_blank');
});

document.getElementById('dymacom').addEventListener('click', function() {
  window.open('https://dymacom.com.ar/', '_blank');
});

document.getElementById('21st').addEventListener('click', function() {
  window.open('https://21.edu.ar/', '_blank');
});

document.getElementById('university').addEventListener('click', function() {
  window.open('https://www.unimoron.edu.ar/', '_blank');
});

document.getElementById('technical').addEventListener('click', function() {
  window.open('https://sanjudastadeo.edu.ar/nueva/index.php/nivel-tecnico', '_blank');
});

function ShowHide(divId) {
  var divs = ['education', 'jobs', 'certifications'];
  for (var i = 0; i < divs.length; i++) {
      var div = document.getElementById(divs[i]);
      
      if (divs[i] === divId) {
          div.style.display = 'block';
      } else {
          div.style.display = 'none';
      }
  }
}

var toggle = false;
var scrolled = false;

function handleScroll() {
  var scrollTop = window.scrollY;
  if (scrollTop > 20) {
    scrolled = true;
  } else {
    scrolled = false;
  }
  updateNav();
}

window.addEventListener("scroll", handleScroll);

function updateNav() {
  var nav = document.querySelector('nav');
  if (scrolled) {
    nav.className = 'sm:px-16 px-6 w-full transition-all duration-300 py-5 fixed top-0 z-20 bg-primary bg-black/50';
  } else {
    nav.className = 'sm:px-16 px-6 w-full transition-all duration-300 py-5 fixed top-0 z-20 bg-primary bg-transparent'
  }
}

updateNav();

document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');

  menuButton.addEventListener('click', function() {
    const isMenuVisible = mobileMenu.classList.contains('block');
    
    if (isMenuVisible) {
      mobileMenu.classList.remove('block');
      mobileMenu.classList.add('opacity-0');
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('opacity-0');
      }, 300);
      menuIconOpen.classList.remove('hidden');
      menuIconOpen.classList.add('block');
      menuIconClose.classList.remove('block');
      menuIconClose.classList.add('hidden');
    } else {
      mobileMenu.classList.remove('hidden');
      setTimeout(() => {
        mobileMenu.classList.add('block');
        mobileMenu.classList.remove('opacity-0');
      }, 10);  // Small delay transition
      menuIconOpen.classList.remove('block');
      menuIconOpen.classList.add('hidden');
      menuIconClose.classList.remove('hidden');
      menuIconClose.classList.add('block');
    }
  });
});




