class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <link rel="stylesheet" href="/css/style.css">
    <header class="header">
    <div class="sub-header">
        <ul>
            <li>
                <a href="#">
                    <i class="fa fa-facebook"></i>
                </a>
            </li>
            <li>
                <a  href="#">
                    <i class="fa fa-twitter"></i>
                </a>
            </li>
            <li><div class="sub-header-link">English</div></li>
            <li><div class="sub-header-link">My Page</div></li>
            <li><div class="sub-header-link">Logout</div></li>
        </ul>
    </div>
    <div class="main-header">
        <div class="main-header-logo"><img  src="/assets/icon/logo.png" alt="logo" >
        </div>
        <ul>
        <a class="main-header-menu" href="/about.html">About</a>
        <a class="main-header-menu" href="/index.html">Program</a>
        <a class="main-header-menu" href="#">Join</a>
        <a class="main-header-menu" href="#">Sponsor</a>
        <a class="main-header-menu" href="#">News</a>
        <a class="main-header-menu" href="#">CC Campaign</a>                    
    </div>
    </header>
      `;
  }
}

customElements.define('header-component', Header);