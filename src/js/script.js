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

// Call the function when the DOM is ready
document.addEventListener('DOMContentLoaded', hamburgerMenuNav);