/* 
  This function handles the hamburger menu in mobile view
*/

const handleMobileNav = () => {

  const mobileNav = document.getElementById("js-mobileNav");

  mobileNav.addEventListener('click', () => {
    const navLines = document.querySelectorAll(".header__nav-line");
    const navText = document.querySelector(".header__nav-text");
    const nav = document.querySelector(".header__nav");
    const tabList = document.querySelector(".header__tab-list");

    navLines.forEach(e => e.classList.toggle("active"));
    navText.classList.toggle("active");
    nav.classList.toggle("active");
    tabList.classList.toggle("active");
  })
};


/* 
  This function handles the tab navigation
*/

const handleTabNav = () => {
  const headerTabList = document.getElementById("js-tabList");

  headerTabList.addEventListener('click', (e) => {
    const clickedTab = e.target.closest('.header__tab-item');

    if (clickedTab) {
      e.preventDefault();

      // Remove 'active' class from all tabs
      const tabs = document.querySelectorAll(".header__tab-item");
      tabs.forEach(tab => tab.classList.remove('active'));

      // Add 'active' class to the clicked tab
      clickedTab.classList.add('active');

      // Scroll to the corresponding section
      const targetSectionId = clickedTab.querySelector('.header__tab-name').getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetSectionId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Make the home tab the default active tab
  const defaultTab = document.querySelector(".header__tab-item");
  if (defaultTab) {
    defaultTab.classList.add('active');
  }
};

/* 
  This function handles the "Hire Me" button so that it goes to Hire Section/Element
*/

const handleScrollToSection = () => {
  const hireMeButton = document.getElementById("js-hireMeButton");
  const hireMeSection = document.querySelector(".portfolio__hire");

  hireMeButton.addEventListener('click', () => {
    // scrolls into the hire me section smoothly
    hireMeSection.scrollIntoView({ behavior: 'smooth' });
  });
};

// Call the function when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  handleMobileNav();
  handleTabNav();
  handleScrollToSection();
});