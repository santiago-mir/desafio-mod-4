function createHeader(container) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
  <header class="header">
      <div class="header__main-conteiner">
        <div class="header__logo-conteiner"></div>
        <div class="header__nav-conteiner">
          <nav class="header__nav">
            <a class="text__link" href="./portfolio.html">Portfolio</a>
            <a class="text__link" href="./servicios.html">Servicios</a>
            <a class="text__link" href="./contacto.html">Contacto</a>
          </nav>
        </div>
        <img
          src="./assets/menu.png"
          alt="menu-mobile"
          class="menu-mobile"
        />
        <div class="menu-mobile__conteiner">
          <img
            class="menu-mobile__close-button"
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
  const openMenuEl = componentEl.querySelector(".menu-mobile");
  const closeMenuEl = componentEl.querySelector(".menu-mobile__close-button");
  const menuEl = componentEl.querySelector(".menu-mobile__conteiner");
  createLogo(logoContainer);
  openMenuEl.addEventListener("click", () => {
    menuEl.style.display = "grid";
  });
  closeMenuEl.addEventListener("click", () => {
    menuEl.style.display = "";
  });

  container.appendChild(componentEl);
}
