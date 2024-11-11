import './components/start-view.js';
import './components/home-view.js';
import './components/navbar.js';
import './components/acerca-de-nosotros.js';

document.addEventListener("DOMContentLoaded", () => {

  const startView = document.querySelector("start-view");
  const navbar = document.createElement("nav-bar")
  const homeView = document.createElement("home-view");
  const aboutUsView = document.createElement("about-us")

  function showHomePage() {
    document.body.innerHTML = "";
    document.body.appendChild(navbar);
    addNavBarEvents()
    document.body.appendChild(homeView);
    changeSelectedNavButton("home-btn")
  }

  function showAboutUsPage() {
    document.body.innerHTML = "";
    document.body.appendChild(navbar);
    addNavBarEvents()
    document.body.appendChild(aboutUsView);
    changeSelectedNavButton("question-btn")
    aboutUsView.querySelector("#services").addEventListener("click",()=>{
      console.log("mostrarPaginaDeProductos");     
      // showProductsPage()
    })
  }

  function changeSelectedNavButton(newButton) {
      navbar.querySelector(`.${newButton}`).classList.add("navSelected");
  }

  function addNavBarEvents() {
      navbar.querySelector(".home-btn").addEventListener("click", () => {
        showHomePage()
      });

      navbar.querySelector(".question-btn").addEventListener("click", () => {
        showAboutUsPage()
      });
  }

  startView.addEventListener("startClicked", () => {
    showHomePage()
  });
});
