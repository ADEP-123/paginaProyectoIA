class AcercaDeNosotros extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = /*html*/`
        <div class="totalContainer">
            <div class="zonaInforme">
                <h1>Quienes somos</h1>
                <p>Somos una empresa que busca optimizar los trabajos diarios de los geologos a travez de el uso de estrategias y herramientas de inteligencia artificial en procesos como:</p>
                <br>
                <h2>Deteccion automatica de minerales en secciones delgadas</h2>
                <img src="./imgs/imagenEjemplo.png"/>
                <P>El análisis de secciones delgadas mineralógicas en luz reflejada es un proceso crítico en la geología, especialmente para disciplinas como la mineralogía, la petrología y la geociencia aplicada en sectores como la minería y el petróleo. Actualmente, los métodos convencionales de identificación y mapeo mineral requieren de técnicos especializados y son intensivos en tiempo, ya que dependen de la observación manual a través de microscopios ópticos. Este enfoque, aunque preciso, presenta limitaciones en términos de eficiencia, particularmente cuando se procesan grandes volúmenes de muestras. pero con el uso de nuestra app <b>Thin-IA</b> usted podrá optimizar este proceso a la velocidad de un click.</P>
                <br>
                <p>El trabajo de clasificacion de minerales ha cambiado con esta aplicacion, con solo el uso de una foto en nuestro software, podra detectar cada uno de los minerales de la imagen con una presicion de <b>mas del 80%</b></p>
            </div>
            <div class="buttonDiv">
                <button id="services">Adquierelo Ahora</button>
            </div>
        </div>
        `;
    }
}

customElements.define('about-us', AcercaDeNosotros);
export default AcercaDeNosotros