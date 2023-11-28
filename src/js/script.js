/* 
  This function handles the hamburger menu in mobile view
*/

const hamburgerMenuNav = () => {

  const hamburgerMenu = document.querySelector(".js-hamburger-menu");
  const hamburgerLines = document.querySelectorAll(".header__hamburger-line");
  const linkList = document.querySelector(".header__link-list");

  // Open and close the Hamburger Menu Navigation when clicked

  hamburgerMenu.addEventListener('click', () => {
    if (linkList.style.display === 'flex') {
      linkList.style.display = 'none';
      hamburgerLines.forEach((e) => {
        e.classList.remove("active");
      });
    } else {
      linkList.style.display = 'flex';
      hamburgerLines.forEach((e) => {
        e.classList.add("active");
      });
    }
  });
};

document.getElementById('addressItem').addEventListener('click', function() {
  // Open Google Maps with the specified address
  window.location.href = 'https://www.google.com/maps/search/?api=1&query=Barangay+Pansol,+Quezon+City,+Philippines+1108';
});

document.getElementById('phoneItem').addEventListener('click', function() {
  // Initiate a phone call
  window.location.href = 'tel:+63962661372';
});

document.getElementById('emailItem').addEventListener('click', function() {
  // Compose a blank email
  window.location.href = 'mailto:jperryimbuido@gmail.com';
});

// Call the function when the DOM is ready
document.addEventListener('DOMContentLoaded', hamburgerMenuNav);