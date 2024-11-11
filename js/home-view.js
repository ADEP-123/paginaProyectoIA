class HomeView extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = /*html*/`

        <div class="container">
            <!-- Barra superior con logo -->
            <div class="header">
                <img src="./imgs/logo.png" alt="Logo">
            </div>
        
            <!-- Cuerpo de la página -->
            <div class="main-content">
                <div class="content">
                    <!-- Sección de Misión -->
                    <div class="section mision">
                        <h2>Misión</h2>
                        <p>Desarrollar una inteligencia artificial avanzada que apoye a los geólogos en el análisis de datos complejos, como secciones delgadas mineralógicas y registros de pozos, facilitando la identificación, clasificación y localización precisa de minerales y características geológicas. A través de modelos de aprendizaje profundo, buscamos optimizar los procesos de análisis de datos, reduciendo el tiempo y los errores humanos, y proporcionando herramientas poderosas que mejoren la toma de decisiones en proyectos de exploración minera, petrolera y en estudios científicos.</p>
                    </div>
        
                    <!-- Línea decorativa -->
                    <div class="divider"></div>
        
                    <!-- Sección de Visión -->
                    <div class="section vision">
                        <h2>Visión</h2>
                        <p>Convertirnos en la herramienta esencial para los geólogos, brindando soluciones innovadoras de inteligencia artificial que transformen el análisis de datos geológicos. A través de la automatización y el aprendizaje profundo, aspiramos a ofrecer una plataforma que integre múltiples fuentes de datos geológicos, como secciones delgadas, registros de pozos y análisis de rocas reservorio, mejorando la precisión y la eficiencia en la investigación y explotación de recursos naturales. Nuestro objetivo es apoyar a los profesionales de la geociencia en sus labores cotidianas, optimizando la exploración, la caracterización y la interpretación de datos en diversas disciplinas.</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define("home-view", HomeView);
export default HomeView;
