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
                <button class="home-btn">🏠</button>
                <button class="question-btn">❓</button>
                <button class="app-btn">📱</button>
                <button class="phone-btn">📞</button>
            </nav>
        `;
    }
}

customElements.define('nav-bar', NavBar);
export default NavBar