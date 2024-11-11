import './start-view.js';
import './home-view.js';
import './navbar.js';

document.addEventListener("DOMContentLoaded", () => {

    const startView = document.querySelector("start-view");


    startView.addEventListener("startClicked", () => {

        startView.remove();  

        const navbar = document.createElement("nav-bar")
        const homeView = document.createElement("home-view");  
        document.body.appendChild(navbar);  
        document.body.appendChild(homeView);  
    });
});
