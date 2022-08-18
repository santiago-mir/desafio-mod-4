function createFooter(conteiner) {
  const footerEl = document.createElement("div");
  footerEl.innerHTML = `
  <footer class="footer">
  <div class="footer__conteiner">
   <div class="footer__conteiner-logo"></div>
    <div class="footer__social-media-conteiner">
      <a class="text__link" href="https://www.instagram.com/santi_miranda1/"
        ><img
          class="footer__social-media-img"
          src="./assets/instagram.png"
          alt="instagram-logo"
        />
        <span class="text__pharagraph">Instagram</span>
      </a>
      <a
        class="text__link"
        href="https://www.linkedin.com/in/santiago-miranda-a23304239/"
        ><img
          class="footer__social-media-img"
          src="./assets/linkedin.png"
          alt="linkedin-logo"
        />
        <span class="text__pharagraph">Linkedin</span>
      </a>
      <a class="text__link" href="https://github.com/santiago-mir"
        ><img
          class="footer__social-media-img"
          src="./assets/signo-de-github.png"
          alt="github-logo"
        />
        <span class="text__pharagraph">Github</span>
      </a>
    </div>
  </div>
</footer>`;
  const logoContainerEl = footerEl.querySelector(".footer__conteiner-logo");
  createLogo(logoContainerEl);
  conteiner.appendChild(footerEl);
}
