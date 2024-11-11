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
                <br>
                <h2>Estimacion automatizada y asistida de potenciales petroliferos a partir de registros de pozo</h2>
                <img src="./imgs/imagenEjemploPozo.jpg"/>
                <P>En el ámbito de la petrofísica, los estudios de viabilidad para la explotación de pozos petroleros son procesos largos y complejos que requieren la recolección y análisis detallado de grandes volúmenes de datos geológicos y geofísicos. Este trabajo manual y tedioso aumenta la probabilidad de errores humanos, lo que puede llevar a decisiones ineficientes en la explotación de reservas.Los estudios de viabilidad pueden extenderse por varios meses debido a la necesidad de analizar múltiples variables y su interacción con los componentes físicos de la roca, como porosidad, permeabilidad y saturación de fluidos. Además, los efectos secundarios de estos componentes sobre los registros de pozo a menudo camuflan zonas de interés, lo que dificulta la identificación precisa de áreas ricas en petróleo, tanto para producción convencional como para métodos de extracción no convencionales, como la fracturación hidráulica. En este contexto, el uso de inteligencia artificial en la interpretación de datos petrofísicos presenta una solución innovadora, ya que permite reducir los tiempos de análisis, minimizar el riesgo de errores y mejorar la precisión en la identificación de puntos óptimos para la explotación. La capacidad de la IA para analizar patrones en grandes conjuntos de datos reduce el margen de error y optimiza la toma de decisiones, lo que podría mejorar considerablemente la eficiencia en la industria petrolera
                </P>
                <br>
                <p>en GEO-IA estamos trabajando en una herramienta IA que facilitara el proceso de deteccion de potenciales petroliferos a travez de registros de pozos, optimizando un proceso que suele durar meses a tiempos de incluso dias o semanas</p>
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