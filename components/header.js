function createHeader(container) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
  <header class="header">
  <div class="header__main-conteiner">
    <div class="header__logo-conteiner"></div>
    <div class="header__menu-conteiner">
      <ul class="header__menu-list">
        <a class="text__link" href="./portfolio.html">Portfolio</a>
        <a class="text__link" href="">Servicios</a>
        <a class="text__link" href="">Contacto</a>
      </ul>
    </div>
    <img
      src="./assets/menu.png"
      alt="menu-mobile"
      class="header__menu-mobile"
    />
  </div>
</header>
    `;
  const logoContainer = componentEl.querySelector(".header__logo-conteiner");
  createLogo(logoContainer);
  container.appendChild(componentEl);
}
