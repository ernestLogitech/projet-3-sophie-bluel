const reponse = await fetch("http://localhost:5678/api/works", {
  headers: {
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
    "Content-Type": "application/json",
    "Cross-Origin-Resource-Policy": "same-site | same-origin | cross-origin",
  },
});
const works = await reponse.json();
console.log(works);
function genererGallery(works) {
  for (let i = 0; i < works.length; i++) {
    const galery = works[i];
    const figureElement = document.createElement("figure");
    const imageElement = document.createElement("img");
    imageElement.src = galery.imageUrl;
    //image.alt.innerText = galery.title;
    const titreFigure = document.createElement("figcaption");
    titreFigure.innerText = galery.title;

    //rattache les elements crees au parents
    const sectionPortfolio = document.querySelector("#portfolio");
    const divisionGallery = document.querySelector(".gallery");
    sectionPortfolio.appendChild(divisionGallery);
    divisionGallery.appendChild(figureElement);
    figureElement.appendChild(imageElement);
    figureElement.appendChild(titreFigure);
  }
}
genererGallery(works);

const buttonTous = document.getElementById("tous");
//console.log(buttonTous);
buttonTous.addEventListener("click", function () {
  const tousGallery = Array.from(works);
  document.querySelector(".gallery").innerHTML = "";
  genererGallery(tousGallery);
});

const buttonObjets = document.getElementById("Objets");
buttonObjets.addEventListener("click", function () {
  const tousObjets = Array.from(works);
  const tousObjet = tousObjets.filter(function (a) {
    return a.category.name == "Objets";
  });
  document.querySelector(".gallery").innerHTML = "";
  genererGallery(tousObjet);
  console.log(tousObjet);
});

const buttonAppartements = document.getElementById("Appartements");
buttonAppartements.addEventListener("click", function (e) {
  const tousappartements = Array.from(works);
  const tousappartement = tousappartements.filter(function (a) {
    return a.category.name == "Appartements";
  });
  //console.log(works[2].category.name);
  console.log(e.target.textContent);
  //console.log(buttonAppartements.value);
  document.querySelector(".gallery").innerHTML = "";
  genererGallery(tousappartement);
  console.log(tousappartement);
});

const buttonrestaurants = document.getElementById("restaurants");
buttonrestaurants.addEventListener("click", function () {
  const tousObjets = Array.from(works);
  const tousObjet = tousObjets.filter(function (a) {
    return a.category.name == "Hotels & restaurants";
  });
  document.querySelector(".gallery").innerHTML = "";
  genererGallery(tousObjet);
  console.log(tousObjet);
});
