import './components/start-view.js';
import './components/home-view.js';
import './components/navbar.js';

document.addEventListener("DOMContentLoaded", () => {

  const startView = document.querySelector("start-view");
  const navbar = document.createElement("nav-bar")
  const homeView = document.createElement("home-view");
  let navbarEventsSetted = false;

  function showHomePage() {
    document.body.innerHTML = "";
    document.body.appendChild(navbar);
    document.body.appendChild(homeView);
    addNavBarEvents()
    changeSelectedNavButton("home-btn")
  }

  function showAboutUsPage() {
    document.body.innerHTML = "";
    document.body.appendChild(navbar);
  }

  function changeSelectedNavButton(newButton) {
      navbar.querySelector(`.${newButton}`).classList.add("navSelected");
  }

  function addNavBarEvents() {
    if (!navbarEventsSetted) {
      navbar.querySelector(".home-btn").addEventListener("click", () => {
        showHomePage()
      });

      // navbar.querySelector(".home-btn").addEventListener("click", () => {
      //   showAboutUsPage()
      // });
      navbarEventsSetted = true;
    }
  }

  startView.addEventListener("startClicked", () => {
    showHomePage()
  });
});
