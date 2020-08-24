document.addEventListener('DOMContentLoaded', () => {

    class PlayerComponent extends HTMLElement {
        constructor() {
            super();
            let template = document.querySelector('#player-component');
            let content = template.content;

            const shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.appendChild(content.cloneNode(true));
        }

        connectedCallback() {
            console.log("Added to DOM");
        }

        disconnectedCallback() {
            console.log("Element removed from DOM")
        }
    }

    customElements.define('player-component', PlayerComponent);
});