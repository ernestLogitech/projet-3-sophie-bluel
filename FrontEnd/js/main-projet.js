
/*
const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Voilà la réponse du serveur !');
});

server.listen(process.env.PORT || 3000);
*/
/*
const reponse = await fetch('http://localhost:5678/api/works',
{
    headers:{ 
    "Accept": "application/json",
    "access-control-allow-origin": '*' ,
    "content-type": "application/json",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    }
});*/
const reponse = await fetch('http://localhost:5678/api/works',{

    headers: {
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json", 
      "Content-Type":"application/json",
      "Cross-Origin-Resource-Policy" : "same-site | same-origin | cross-origin",
  //   "Access-Control-Allow-Origin":"missing", 
    

    }
  });
const works = await reponse.json();
console.log(works);
///const reponsCategorie = await fetch('http://localhost:5678/api/categories');
const reponsCategorie = await fetch('http://localhost:5678/api/categories',{

    headers: {
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json", 
      "Content-Type":"application/json",
      "Cross-Origin-Resource-Policy" : "same-site | same-origin | cross-origin",
     //"Access-Control-Allow-Origin":"missing",
    }
  });
const categories = await reponsCategorie.json();
console.log(categories);

function genererGallery(works) {
for(let i = 0; i < works.length ; i++){
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

const buttonTous = document.querySelector('.tous');
buttonTous.addEventListener('click', function(){
const tousGallery = Array.from(works); 
document.querySelector(".gallery").innerHTML = '';
genererGallery(tousGallery);
});

const buttonObjets = document.querySelector('.Objets');
buttonObjets.addEventListener('click', function(){
const tousObjets = Array.from(works); 
const tousObjet = tousObjets.filter(function (a) {
    return a.category.name == "Objets";

});
document.querySelector(".gallery").innerHTML = '';
genererGallery(tousObjet);
console.log(tousObjet);
});

const buttonAppartements = document.querySelector('.Appartements');
buttonAppartements.addEventListener('click', function(e){
    const tousappartements = Array.from(works); 
    const tousappartementse = tousappartements.filter(function (a) {
       
        return a.category.name == "Appartements";

    });
    //console.log(works[2].category.name);
    console.log(e.target.textContent);
    //console.log(buttonAppartements.value);
    document.querySelector(".gallery").innerHTML = '';
    genererGallery(tousappartementse);
    console.log(tousappartementse);
});

const buttonrestaurants = document.querySelector('.restaurants');
buttonrestaurants.addEventListener('click', function(){
    
const tousObjets = Array.from(works); 
const tousObjet = tousObjets.filter(function (a) {
    return a.category.name == "Hotels & restaurants";

});
document.querySelector(".gallery").innerHTML = '';
genererGallery(tousObjet);
console.log(tousObjet);

});