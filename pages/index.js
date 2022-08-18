// Welcome-Section //

function getWelcomeData() {
  fetch(
    "https://cdn.contentful.com/spaces/k1oflyt1vm6c/environments/master/entries?access_token=wTkVwqbJmsQE4MO5YbjyM-Xm9Iovnpm3d5wxzDQtxSs&&content_type=welcome"
  )
    .then((response) => response.json())
    .then((data) => loadWelcomeData(data));
}

function loadWelcomeData(data) {
  const welcomeTemplateEl = document.querySelector("#welcome__temp");
  const conteinerEl = document.querySelector(".welcome");
  var clone = welcomeTemplateEl.content.cloneNode(true);
  var titleEl = (clone.querySelector(".text__main-title").textContent =
    data.items[0].fields.title);
  var subTitleEl = (clone.querySelector(".text__sub-title").textContent =
    data.items[0].fields.subtitle);
  conteinerEl.appendChild(clone);
}

// About-me Section //

function getAboutMeData() {
  fetch(
    "https://cdn.contentful.com/spaces/k1oflyt1vm6c/environments/master/entries?access_token=wTkVwqbJmsQE4MO5YbjyM-Xm9Iovnpm3d5wxzDQtxSs&&content_type=presentacion"
  )
    .then((response) => response.json())
    .then((data) => loadAboutMeData(data));
}

function loadAboutMeData(data) {
  const aboutMeTemplateEl = document.querySelector("#about-me__temp");
  const conteinerEl = document.querySelector(".about-me");
  var clone = aboutMeTemplateEl.content.cloneNode(true);
  var titleEl = (clone.querySelector(".text__sub-title").textContent =
    data.items[0].fields.titulo);
  var descriptionEl = (clone.querySelector(".text__pharagraph").textContent =
    data.items[0].fields.descripcion);
  var imgEl = (clone.querySelector(".about-me__img").src =
    data.includes.Asset[0].fields.file.url);
  conteinerEl.appendChild(clone);
}

// Services Section //

function getServicesData() {
  fetch(
    "https://cdn.contentful.com/spaces/k1oflyt1vm6c/environments/master/entries?access_token=wTkVwqbJmsQE4MO5YbjyM-Xm9Iovnpm3d5wxzDQtxSs&&content_type=desafioModulo4"
  )
    .then((response) => response.json())
    .then((data) => loadServicesData(data));
}

function loadServicesData(data) {
  const myData = data.items;
  var myContainerEl = document.querySelector(".my-services__cards-conteiner");
  var myTemplateEl = document.querySelector("#my-services__temp");
  for (let i = 0; i < myData.length; i++) {
    var clone = myTemplateEl.content.cloneNode(true);
    var titleEl = (clone.querySelector(".text__card-title").textContent =
      myData[i].fields.title);
    var descriptionEl = (clone.querySelector(".text__pharagraph").textContent =
      myData[i].fields.description.content[0].content[0].value);
    var imgEl = (clone.querySelector(".card__img").src =
      data.includes.Asset[0].fields.file.url);

    myContainerEl.appendChild(clone);
  }
}

function main() {
  const headerConteiner = document.querySelector(".welcome");
  const formConteiner = document.querySelector(".contact-me");
  const footerConteiner = document.querySelector(".section-footer");
  createHeader(headerConteiner);
  createForm(formConteiner);
  createFooter(footerConteiner);
  getWelcomeData();
  getAboutMeData();
  getServicesData();
}

main();
