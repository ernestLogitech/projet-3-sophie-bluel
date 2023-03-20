const reponse = await fetch('http://localhost:5678/api/works',{

    headers: {
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json", 
      "Content-Type":"application/json",
      "Cross-Origin-Resource-Policy" : "same-site | same-origin | cross-origin",
    }
  });
const works = await reponse.json();
console.log(works);
function genererGallery(works) {
for(let i = 0; i < works.length ; i++){
    const galery = works[i];
    const figureElement = document.createElement("figure");
    const imageElement = document.createElement("img");
    const imageElementdiv = document.createElement("div");
    const imageElementfavdelete = document.createElement("i");
    imageElement.src = galery.imageUrl;
    //image.alt.innerText = galery.title;
    const titreFigure = document.createElement("figcaption");
    //titreFigure.innerText = galery.title;
    titreFigure.innerText = 'éditer'

    //rattache les elements crees au parents
    const sectionPortfolio = document.querySelector("#portfolio");
    const divisionGallery = document.querySelector(".gallerymodal");
   // sectionPortfolio.appendChild(divisionGallery);
    divisionGallery.appendChild(figureElement);
    figureElement.appendChild(imageElement); 
    imageElementdiv.className = 'deleteBlack';
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