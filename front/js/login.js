let resultValues;
let login;
let stoLogin;
let connectToken;
let result;
async function send(e) {
  e.preventDefault();
  var vemail = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  console.log(vemail);
  console.log(password);
  console.log("je suis dans la function");
  let response;
  if (vemail != "" && password != "") {
    login = {
      email: vemail,
      password: password,
    };

    response = await fetch("http://localhost:5678/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(login),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        console.log(result);
        if (data.token) {
          console.log("connexion reussit");
          login = JSON.stringify(login);
          result = JSON.stringify(data);
          localStorage.setItem("connectLogin", login);
          localStorage.setItem("connectToken", result);
          stoLogin = localStorage.getItem("connectLogin");
          connectToken = localStorage.getItem("connectToken");
          console.log(connectToken);
          console.log(stoLogin);
          setTimeout(() => {
            location.href = "index.html";
          }, 1000);
        } else {
          getemailValidation();
          console.log(data.error);
        }
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

document.getElementById("form").addEventListener("submit", send);

document.getElementById("email").addEventListener("input", function (e) {
  document.getElementById("res-error").style.display = "none";
});
document.getElementById("password").addEventListener("input", function (e) {
  document.getElementById("res-error").style.display = "none";
});
function getemailValidation() {
  document.getElementById("res-error").style.display = "block";
  document.getElementById("res-error").innerText =
    "Email ou Mot de passe invalide";
}
function getemailValidationVide() {
  document.getElementById("res-error").style.display = "block";
  document.getElementById("res-error").innerText =
    "Renseigner vos informations de connexion svp !";
}

function afficheruserconnect() {
  return (document.getElementById("nomemail").innerText = login.email);
}
