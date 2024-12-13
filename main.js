document.querySelector('.button-login').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('preloader').style.display = 'flex';
  setTimeout(function() {
      window.location.href = 'https://maynik.github.io/Homework14/registration.html';
  }, 3000);
});
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger-menu');
  const mobileNav = document.querySelector('.mobile-nav');

  burger.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
  });
});
