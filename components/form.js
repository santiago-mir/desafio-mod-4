function postForm(formEl) {
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(formEl);
    const formEntries = Object.fromEntries(formData.entries());
    console.log(formEntries);
    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "san_chan97@hotmail.com",
        message: `Nombre: ${formEntries.name}, Email: ${formEntries.email}, Mensaje: ${formEntries.message}`,
      }),
    }).then((data) => data.json());

    formEl.reset();
  });
}

function createForm(conteiner) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
        <div class="contact-me__title-conteiner">
          <h6 class="text__sub-title text--white">Escribime</h6>
        </div>
        <form class="form">
          <label class="form__label text__pharagraph text--white" for="name">
            NOMBRE
            <input
              class="form__input"
              type="text"
              name="name"
              placeholder="Nombre"
            />
          </label>
          <label class="form__label text__pharagraph text--white" for="email">
            EMAIL
            <input
              class="form__input"
              type="email"
              name="email"
              placeholder="Email"
            />
          </label>
          <label class="form__label text__pharagraph text--white" for="message">
            MENSAJE
            <textarea class="form__input form__textarea" name="message">
            </textarea>
          </label>
          <div class="conteiner--button">
            <button class="button text__button text--white">Enviar</button>
          </div>
        </form>
      `;
  componentEl.className = "contact-me__conteiner";
  const formEl = componentEl.querySelector(".form");
  postForm(formEl);
  conteiner.appendChild(componentEl);
}
