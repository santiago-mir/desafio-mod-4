function getPortfolioData() {
  fetch(
    "https://cdn.contentful.com/spaces/i1ddhx0pblbm/environments/master/entries?access_token=T-XgtWmb_WCUA6thy0W8xmSlteoCV7g4P9aJxK4DFNE"
  )
    .then((response) => response.json())
    .then((data) => loadPortfolioData(data));
}

function loadPortfolioData(data) {
  const myData = data.items;
  var myContenedorEl = document.querySelector(".portfolio__conteiner-cards");
  var myTemplateEl = document.querySelector("#porfolio__template");
  for (let i = 0; i < myData.length; i++) {
    var clone = myTemplateEl.content.cloneNode(true);
    var titleEl = (clone.querySelector(".card__title").textContent =
      myData[i].fields.title);
    var descriptionEl = (clone.querySelector(".card__description").textContent =
      myData[i].fields.description.content[0].content[0].value);
    var urlEl = (clone.querySelector(".card__link").href =
      myData[i].fields.url);
    var imgEl = (clone.querySelector(".card__img-preview").src =
      data.includes.Asset[i].fields.file.url);
    myContenedorEl.appendChild(clone);
  }
}

function main() {
  const headerConteinerEl = document.querySelector(".welcome");
  const footerConteinerEl = document.querySelector(".footer-section");
  createHeader(headerConteinerEl);
  createFooter(footerConteinerEl);
  getPortfolioData();
}
main();
