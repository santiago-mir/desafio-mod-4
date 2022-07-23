function createHeader(container) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
    <header class="header">
      <div class="header__conteiner">
        <img src="./assets/logo.png" alt="" class="logo--header" />
        <img
          src="./assets/menu.png"
          alt="menu-mobile"
          class="header__menu-mobile"
        />
      </div>
    </header>
    `;
  container.appendChild(componentEl);
}
