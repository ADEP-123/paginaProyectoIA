class StartView extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = /*html*/`
            <h1 class="title">GEO - IA</h1>
            <button class="start-btn">Empezar</button>
        `;

        this.querySelector(".start-btn").addEventListener("click", () => {
            // Emitir un evento 'startClicked' para cambiar la vista
            this.dispatchEvent(new CustomEvent('startClicked', { bubbles: true }));
        });
    }
}

customElements.define("start-view", StartView);
export default StartView;
