import Model from "./model.js";

class Controller {
    constructor(view) {
        this.model = new Model();
        this.view = view;
    }

    getTitle() {
        return this.model.getTitle();
    }

    getButtonText() {
        return this.model.getButtonText();
    }

    handleStart() {
        alert("¡Empezamos el análisis de minerales!");
        // Aquí podrías redirigir a otra vista o cargar nueva información
    }
}

export default Controller;
