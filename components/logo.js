function addLogo(container) {
  const logoEl = document.createElement("div");
  logoEl.innerHTML = `
    <img
    class="logo"
    src="../assets/logo.png"
    alt="logo"
  />`;
  container.appendChild(logoEl);
}
