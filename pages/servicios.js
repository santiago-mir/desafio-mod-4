function getServicesData() {
  fetch(
    "https://cdn.contentful.com/spaces/k1oflyt1vm6c/environments/master/entries?access_token=wTkVwqbJmsQE4MO5YbjyM-Xm9Iovnpm3d5wxzDQtxSs&&content_type=desafioModulo4"
  )
    .then((response) => response.json())
    .then((data) => loadServicesData(data));
}

function loadServicesData(data) {
  const myData = data.items;
  var myContainerEl = document.querySelector(".services__conteiner-cards");
  var myTemplateEl = document.querySelector("#services__temp");
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
  const headerConteinerEl = document.querySelector(".conteiner__header");
  const footerConteinerEl = document.querySelector(".conteiner__footer");
  createHeader(headerConteinerEl);
  createFooter(footerConteinerEl);
  getServicesData();
}

main();
