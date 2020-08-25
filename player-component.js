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

            let remove_button = this.shadowRoot.querySelector("#deny");
            remove_button.addEventListener('click', () => {
                let parent_box = this.shadowRoot.querySelector('.player-box');
                parent_box.classList.add('removed')
                parent_box.addEventListener('animationend', () => {
                    this.remove();
                })
            })

            let add_button = this.shadowRoot.querySelector("#accept");
            add_button.addEventListener('click', () => {
                let parent_box = this.shadowRoot.querySelector('.player-box');
                let status = this.shadowRoot.querySelector('.status');
                status.innerHTML = 'joined';
                parent_box.classList.add('joined');
            })
        }

        disconnectedCallback() {
            console.log("Element removed from DOM")
        }
    }

    customElements.define('player-component', PlayerComponent);
});