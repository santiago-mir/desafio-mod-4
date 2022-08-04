function getMyServicesData() {
  fetch(
    "https://cdn.contentful.com/spaces/k1oflyt1vm6c/environments/master/entries?access_token=wTkVwqbJmsQE4MO5YbjyM-Xm9Iovnpm3d5wxzDQtxSs"
  )
    .then((response) => response.json())
    .then((data) => loadMyServicesData(data));
}

function loadMyServicesData(data) {
  console.log(data);
  const myData = data.items;
  var myContainerEl = document.querySelector(".my-services__conteiner-cards");
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
  const headerContainer = document.querySelector(".conteiner--header");
  createHeader(headerContainer);
  getMyServicesData();
}

main();
