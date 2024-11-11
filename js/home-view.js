class HomeView extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = /*html*/`
            <div class="content">
                <div class="mision">
                    <h2>Misión</h2>
                    <p>Esta es la misión de la página web.</p>
                </div>
                <div class="vision">
                    <h2>Visión</h2>
                    <p>Esta es la visión de la página web.</p>
                </div>
            </div>
        `;
    }
}

customElements.define("home-view", HomeView);
export default HomeView;
