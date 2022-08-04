function createLogo(container) {
  const logoEl = document.createElement("div");
  logoEl.innerHTML = `<img src="./assets/logo.png" alt="logo" class="logo" />`;
  container.appendChild(logoEl);
}
