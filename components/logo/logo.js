function addLogo(container) {
  const logoEl = document.createElement("div");
  logoEl.innerHTML = `
    <img
    class="logo"
    src="/assets/14051644faf64bd9826c292321c0d6cc-removebg-preview.png"
    alt="logo"
  />`;
  container.appendChild(logoEl);
}
