function main() {
  const logoContainer = document.querySelector(".header__logo-container");
  addLogo(logoContainer);
  const myLogo = logoContainer.querySelector(".logo");
  myLogo.classList.add("logo--header");
}

main();
