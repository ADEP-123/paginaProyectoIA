class View extends HTMLElement {
    constructor() {
        super();
        this.controller = null; 
    }

    connectedCallback() {
        if (this.controller) {
            this.render();
        } else {
            console.error("Controller no asignado en View.");
        }
    }

    render() {
        this.innerHTML = `
        <h1 class="title">${this.controller.getTitle()}</h1>
        <button class="start-btn">${this.controller.getButtonText()}</button>
      `;

        this.querySelector(".start-btn").addEventListener("click", () => {
            this.controller.handleStart();
        });
    }
}

customElements.define("main-view", View);
export default View;
