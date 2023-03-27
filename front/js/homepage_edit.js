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

async function send_modal(e) {
  e.preventDefault();

  let connectToken = JSON.parse(localStorage.getItem("connectToken"));
  let title = document.getElementById("name-mod").value;
  let category = document.getElementById("cat-select").value;
  let imageTosend = document.getElementById("file-ajouter-photo").files[0];
  let userId = connectToken.userId;
  let token = connectToken.token;
  const formData = new FormData();

  formData.append("title", title);
  formData.append("category", category);
  formData.append("userId", userId);
  formData.append("image", imageTosend);
  console.log(title);
  console.log(category);
  console.log(userId);
  console.log(formData);
  //console.log(connectToken.token);
  console.log("je suis dans la function modal");
  let response;
  //let auth;
  if (title != "" && category != "") {
    response = await fetch("http://localhost:5678/api/works", {
      method: "POST",
      headers: {
        //  "Content-Type": "application/json",
        //'Content-Type': 'multipart/form-data',
        authorization: "Bearer " + token,
      },
      body: formData,
      //headers: {Authentication: `Bearer ${token}`}
      //headers: {Authentication: 'Bearer {token}'}
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch(function (error) {
        console.log(
          "Il y a eu un problème avec l'opération fetch : " + error.message
        );
      });
  } else {
    getemailValidationVide();
    console.log("vous devez renseigner vos informations de connexion");
  }
}

document.getElementById("form-modal2").addEventListener("submit", function (e) {
  send_modal(e);
});

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
    console.log(works);
    imageEncours = e.target;
    console.log(modalGallery);
    console.log(element);
    indexEncours = modalGallery.indexOf(element);
    console.log(indexEncours);

    let connectToken = JSON.parse(localStorage.getItem("connectToken"));
    let token = connectToken.token;
    let id;
    id = element.getAttribute("id");
    console.log(id);
    response = await fetch("http://localhost:5678/api/works/" + id, {
      method: "DELETE",
      headers: {
        //  "Content-Type": "application/json",
        //'Content-Type': 'multipart/form-data',
        authorization: "Bearer " + token,
      },

      //headers: {Authentication: `Bearer ${token}`}
      //headers: {Authentication: 'Bearer {token}'}
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch(function (error) {
        console.log(
          "Il y a eu un problème avec l'opération fetch : " + error.message
        );
      });
  });
});

/*
  const image_send = document.querySelector("#file-ajouter-photo");
var upload_image = "";
image_send.addEventListener("change", function(){
  //const file = this.files[0]
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    upload_image = reader.result;
    //console.log(this.files[0]);
    document.querySelector("#image-mod").style.backgroundImage = `url(${upload_image})`;
  });
  reader.readAsDataURL(this.files[0]);
  });
  */

/*
const im = document.getElementById("file-ajouter-photo");
im.addEventListener("input", function(e) {
  const imagePhoto = document.createElement("img");
  imagePhoto.setAttribute('src', e.target.value);
  console.log(e.target.value);
  //imagePhoto.setAttribute('src','./assets/images/abajour-tahina.png');
  //document.getElementById("image-mod").innerText = '';
 // imagePhoto.src = e.target.value;
  //figureElement.appendChild(imageElement);
  document.getElementById("image-mod").appendChild(imagePhoto);
  });*/

/*
    async function send_modal(e) {

    e.preventDefault();
    console.log('bien');
    let connectToken =JSON.parse(localStorage.getItem('connectToken')) ;
    var title = document.getElementById("name-mod").value; 
    var category = document.getElementById("cat-select").value;
   // console.log(document.querySelector('input[type="file"]').files);
    const sendFiles = document.querySelector('input[type="file"]').files
    ///const fileInput = document.querySelector('input[type=file]');
    console.log(sendFiles[0]);
    const formData = new FormData();
  

    //formData.append('file', sendFiles[0]);
    formData.append('file',sendFiles[0])
   var userId = connectToken.userId;
    var token = connectToken.token;
    //var userId = connectToken;
    formData.append('title', title);
    formData.append('category',category);
    formData.append('userId',userId);
    console.log(title);
    console.log(category);
    console.log(userId);
    //console.log(connectToken.token);
    console.log("je suis dans la function modal");
    let response;
    //let auth;
    let url;
    if((title !="") && (category !="")){
    let data_modal = { 
      url:formData,
      title:title,
      category:category,
      userId:userId,
      //auth : {userId:userId}
    }

    response = await fetch('http://localhost:5678/api/works', {
    method: 'POST',
    headers: {
    //'Content-Type': 'application/json;charset=utf-8',
    'Authorization': 'Bearer '+ token
    },
    body:  formData,
    //headers: {Authentication: `Bearer ${token}`}
    //headers: {Authentication: 'Bearer {token}'}

    }).then(response => response.json())
    .then(data =>{ console.log(data)
    
    })
    .catch(function(error) {
      console.log('Il y a eu un problème avec l\'opération fetch : ' + error.message);
    });

  }else{
    getemailValidationVide()
    console.log('vous devez renseigner vos informations de connexion');
  }  
 
 }


*/
