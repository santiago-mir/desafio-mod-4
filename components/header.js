function createHeader(container) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
  <header class="header">
      <div class="header__main-conteiner">
        <div class="header__logo-conteiner"></div>
        <div class="header__menu-conteiner">
          <nav class="header__menu-nav">
            <a class="text__link" href="./portfolio.html">Portfolio</a>
            <a class="text__link" href="./servicios.html">Servicios</a>
            <a class="text__link" href="./contacto.html">Contacto</a>
          </nav>
        </div>
        <img
          src="./assets/menu.png"
          alt="menu-mobile"
          class="header__menu-mobile"
        />
        <div class="dropdown-menu">
          <img
            class="dropdown-menu__button"
            src="./assets/close.png"
            alt="close-button"
          />
          <nav class="menu-mobile__nav">
            <a class="text__link" href="./portfolio.html">Portfolio</a>
            <a class="text__link" href="./servicios.html">Servicios</a>
            <a class="text__link" href="./contacto.html">Contacto</a>
          </nav>
        </div>
      </div>
    </header>
    `;
  const logoContainer = componentEl.querySelector(".header__logo-conteiner");
  createLogo(logoContainer);
  const openMenuEl = componentEl.querySelector(".header__menu-mobile");
  const closeMenuEl = componentEl.querySelector(".dropdown-menu__button");
  const dropDownMenuEl = componentEl.querySelector(".dropdown-menu");
  openMenuEl.addEventListener("click", () => {
    dropDownMenuEl.style.display = "grid";
  });
  closeMenuEl.addEventListener("click", () => {
    dropDownMenuEl.style.display = "";
  });
  container.appendChild(componentEl);
}
