class ContactUs extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = /*html*/`
        <div class="contact-container">
            <h2 class="contact-header">Contáctanos</h2>
            
            <div class="social-buttons">
                <a href="https://wa.me/1111111111" target="_blank" class="whatsapp" title="WhatsApp">
                    <i class="fab fa-whatsapp"></i>
                </a>
                <a href="https://twitter.com/tuempresa" target="_blank" class="twitter" title="Twitter">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://facebook.com/tuempresa" target="_blank" class="facebook" title="Facebook">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com/tuempresa" target="_blank" class="instagram" title="Instagram">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>

            <div class="contact-info">
            <div>
                <i class="fas fa-phone-alt"></i>
                <span>+57 (315) 111-1111</span>
            </div>
            <div>
                <i class="fas fa-envelope"></i>
                <span>contacto@geoIA.com</span>
            </div>
        </div>
        </div>
        `;
    }
}

customElements.define('contact-view', ContactUs);
export default ContactUs