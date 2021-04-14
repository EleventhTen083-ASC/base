class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Salazar Carreon Jose Alberto.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
