class Card extends HTMLElement {
    constructor() {
        super();

        this.render();
    }

    render() {
        this.innerHTML = '<div>Jimmy</div>';
    }
}

window.customElements.define('pine-card', Card);