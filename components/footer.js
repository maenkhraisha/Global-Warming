class footer extends HTMLElement {
  connnectCallBack() {
    this.innerHTML = '';
  }
}

customElements.define('footer-component', footer);