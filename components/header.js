function addHeader(conteiner) {
  const headerEl = document.createElement("div");
  headerEl.innerHTML = ` <header class="header">
  <div class="header__logo-container"></div>

  <img src="../assets/menu.png  " alt="menu-mobile" class="header__menu" />
</header>`;
  const logoContainer = headerEl.querySelector(".header__logo-container");
  addLogo(logoContainer);
  const myLogo = logoContainer.querySelector(".logo");
  myLogo.classList.add("logo--header");
  conteiner.appendChild(headerEl);
}
