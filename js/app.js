import './components/start-view.js';
import './components/home-view.js';
import './components/navbar.js';

document.addEventListener("DOMContentLoaded", () => {

    const startView = document.querySelector("start-view");


    startView.addEventListener("startClicked", () => {

        startView.remove();  

        const navbar = document.createElement("nav-bar")
        const homeView = document.createElement("home-view");  
        document.body.appendChild(navbar);  
        document.body.appendChild(homeView);
        navbar.querySelector(".home-btn").classList.add("navSelected")
    });
});
