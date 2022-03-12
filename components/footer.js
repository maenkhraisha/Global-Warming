class footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="fotter">
    <div class="footer-main">
        <h2 class="footer-title">Partner</h2>
        <div class="footer-underline"></div>
        <ul>
          <li>Mozilla</li>
          <li>Google</li>
          <li>NAVER</li>
          <li>daumkaka</li>
          <li>airbnb</li>
        </ul>
    </div>
    <div class="footer-sub">
        <img src="/assets/images/footer-logo.png" alt="footer logo">
        <div>
          <p>2015 creative commons korea. Some right Reserved</p>
          <p>ex a accusamus maiores eaque omnis magni et earum nostrum? Velit natus corporis placeat necessitatibus fugit officia quia ex? Accusantium alias in impedit, eius voluptate assumenda?</p>
        </div>
        
    </div>

</footer>
    `;
  }
}

customElements.define('footer-component', footer);