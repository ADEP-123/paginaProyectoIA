class Products extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = /*html*/`
        <h1>Nuestros Productos</h1>
        <div class="products-container">
            <button class="scroll-button scroll-button-left">&#8249;</button>
            <!-- Tarjeta de producto de ejemplo -->
            <div class="product-card">
                <img src="./imgs/imagenEjemplo.png" alt="Thin IA">
                <div class="product-description">
                    <h2>Thin IA</h2>
                    <p>Detector de minerales en imagenes de secciones delgadas</p>
                    <br>
                    <hr>
                    <br>
                    <p><b>Plan mensual-1</b></p>
                    <p>
                        Hasta 50 peticiones al día
                        <br>
                        Catalogo de muestras
                        <br>
                        Panel estadistico por muestra
                    </p>
                    <br>
                    <hr>
                    <br>
                    <p><b>Plan mensual-2</b></p>
                    <p>
                        Petciones infinitas!
                        <br>
                        Catalogo de muestras
                        <br>
                        Panel estadistico por muestra
                        <br>
                        Panel de deteccion en tiempo real
                    </p>
                </div>
                <div class="payment-plans">
                    <button class="plan-button">Plan 1</button>
                    <button class="plan-button">Plan 2</button>
                </div>
            </div>

            <div class="product-card">
                <img src="./imgs/imagenEjemploPozo.jpg" alt="Producto 2">
                <div class="product-description">
                    <h2>Log IA</h2>
                    <p>Detector de zonas de interes petrolifero con registros de pozo</p>
                    <br>
                    <hr>
                    <br>
                    <p><b>Plan mensual-1</b></p>
                    <p>
                        Hasta 10 peticiones al día
                        <br>
                        Catalogo de pozos
                        <br>
                        Panel estadistico por muestra
                    </p>
                    <br>
                    <hr>
                    <br>
                    <p><b>Plan mensual-2</b></p>
                    <p>
                        Hasta 10 peticiones al día
                        <br>
                        Catalogo de muestras
                        <br>
                        Panel estadistico por muestra
                        <br>
                        Creacion automatica de Registros de analisis avanzados
                    </p>
                </div>
                <div class="payment-plans">
                    <b>Saldrá Pronto!</b>
                </div>
            </div>
            <button class="scroll-button scroll-button-right">&#8250;</button>
            <!-- Agrega más tarjetas de productos aquí -->
        </div>
        `;
    }
}

customElements.define('products-view', Products);
export default Products