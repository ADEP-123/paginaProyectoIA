import './components/start-view.js';
import './components/home-view.js';
import './components/navbar.js';
import './components/acerca-de-nosotros.js';
import './components/products-view.js';
import './components/contact-view.js';

document.addEventListener("DOMContentLoaded", () => {

  const startView = document.querySelector("start-view");
  const navbar = document.createElement("nav-bar")
  const homeView = document.createElement("home-view");
  const aboutUsView = document.createElement("about-us")
  const productsView = document.createElement("products-view")
  const contactView = document.createElement("contact-view")

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
      showProductsPage()
    })
  }

  function showProductsPage(){
    document.body.innerHTML = "";
    document.body.appendChild(navbar);
    addNavBarEvents()
    document.body.appendChild(productsView);
    changeSelectedNavButton("app-btn")
  }

  function showContactsPhone(){
    document.body.innerHTML = "";
    document.body.appendChild(navbar);
    addNavBarEvents()
    document.body.appendChild(contactView);
    changeSelectedNavButton("phone-btn")
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

      
      navbar.querySelector(".app-btn").addEventListener("click", () => {
        showProductsPage()
      });

      navbar.querySelector(".phone-btn").addEventListener("click", () => {
        showContactsPhone()
      });
  }

  startView.addEventListener("startClicked", () => {
    showHomePage()
  });
});
