class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = /*html*/`
            <nav>
                <button class="home-btn" tittle="Home">🏠</button>
                <button class="question-btn" tittle="Arcerca de">❓</button>
                <button class="app-btn" tittle="App">📱</button>
                <button class="phone-btn" tittle="Contacto">📞</button>
            </nav>
        `;
    }
}

customElements.define('nav-bar', NavBar);
export default NavBar