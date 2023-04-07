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
    const imageElementdiv = document.createElement("div");
    const imageElementfavdelete = document.createElement("i");
    imageElement.src = galery.imageUrl;
    const titreFigure = document.createElement("figcaption");
    titreFigure.innerText = "éditer";
    const divisionGallery = document.querySelector(".gallerymodal");

    divisionGallery.appendChild(figureElement);
    figureElement.className = "fig";
    figureElement.setAttribute("id", galery.id);
    figureElement.classList.add("fig");
    figureElement.appendChild(imageElement);
    imageElementdiv.className = "deleteBlack";
    imageElementdiv.classList.add("deleteBlack");
    figureElement.appendChild(imageElementdiv);
    figureElement.appendChild(titreFigure);
    titreFigure.classList.add("nopad");
    figureElement.appendChild(imageElementfavdelete);
    imageElementfavdelete.classList.add("fa-regular");
    imageElementfavdelete.classList.add("fa-trash-can");
    imageElementfavdelete.classList.add("modefav");
  }
}
genererGallery(works);

function genererGalleryHomeEdit(works) {
  for (let i = 0; i < works.length; i++) {
    const galleryHomeEdit = works[i];
    const figureElement = document.createElement("figure");
    const imageElement = document.createElement("img");
    imageElement.src = galleryHomeEdit.imageUrl;
    const titreFigure = document.createElement("figcaption");
    titreFigure.innerText = galleryHomeEdit.title;
    const sectionPortfolio = document.querySelector("#portfolio");
    const divisionGallery = document.querySelector(".galleryHomeEdit");
    sectionPortfolio.appendChild(divisionGallery);
    divisionGallery.appendChild(figureElement);
    figureElement.appendChild(imageElement);
    figureElement.appendChild(titreFigure);
  }
}
genererGalleryHomeEdit(works);

//async function send_modal(e) { creation des ressources

/*
document
  .getElementById("valider-modal")
  .addEventListener("click", function (e) {
    send_modal(e);
  });*/

//document.getElementById("form-modal2").addEventListener("click", send_modal);
document.getElementById("name-mod").addEventListener("input", function (e) {
  document.getElementById("for-name").innerText = e.target.value;
});

document.getElementById("cat-select").addEventListener("change", function (e) {
  document.getElementById("for-select").innerText = e.target.value;
});

// suppression des elements du tableau
const modalGallery = Array.from(document.querySelectorAll(".fig"));
let imageEncours;

console.log(modalGallery);
let indexEncours;
modalGallery.forEach((element) => {
  element.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log(works);
    imageEncours = e.target;
    console.log(modalGallery);
    console.log(element);
    indexEncours = modalGallery.indexOf(element);
    console.log(indexEncours);

    let connectToken = JSON.parse(localStorage.getItem("connectToken"));
    let token = connectToken.token;
    let id;
    let response;
    id = element.getAttribute("id");
    console.log(id);
    response = await fetch("http://localhost:5678/api/works/" + id, {
      method: "DELETE",
      headers: {
        authorization: "Bearer " + token,
      },
    });
    /*
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch(function (error) {
        console.log(
          "Il y a eu un problème avec l'opération fetch : " + error.message
        );
      });*/
  });
});
