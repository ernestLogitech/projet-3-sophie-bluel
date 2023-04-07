let stoLogin = localStorage.getItem("connectLogin");
if (stoLogin != null) {
  afficherLogout();
  afficherEdit();
  masquerLogin();
} else {
  afficherLogin();
  masquerEdit();
  masquerLogout();
}
function afficherLogout() {
  return (document.getElementById("logout").style.display = "block");
}
function masquerLogout() {
  return (document.getElementById("logout").style.display = "none");
}
function afficherEdit() {
  return (document.getElementById("edit").style.display = "block");
}
function masquerEdit() {
  return (document.getElementById("edit").style.display = "none");
}
function masquerLogin() {
  return (document.getElementById("loginCon").style.display = "none");
}
function afficherLogin() {
  return (document.getElementById("loginCon").style.display = "block");
}
document.getElementById("logout").addEventListener("click", function () {
  localStorage.clear();
  //sessionStorage
  //stoLogin = localStorage.setItem("stoLogin", "[]");
  //stoLogin = window.localStorage.removeItem("stoLogin","[]");
  // window.localStorage.removeItem("stoLogin"); faudrai ecrsser le login
  console.log(stoLogin);
  location.href = "login.html";
});

const menuP = document.getElementById("menuP");
const projet = document.getElementById("projet");
const contact = document.getElementById("contact");
const loginCon = document.getElementById("loginCon");
const edit = document.getElementById("edit");
const logout = document.getElementById("logout");

projet.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(projet.value);

  location.href = "index.html";

  projet.classList.add("projet-menu-actuel");
  contact.classList.remove("projet-menu-actuel");
  loginCon.classList.remove("projet-menu-actuel");
  edit.classList.remove("projet-menu-actuel");
  logout.classList.remove("projet-menu-actuel");
});
contact.addEventListener("click", function (e) {
  e.preventDefault();
  contact.classList.add("projet-menu-actuel");
  projet.classList.remove("projet-menu-actuel");
  loginCon.classList.remove("projet-menu-actuel");
  edit.classList.remove("projet-menu-actuel");
  logout.classList.remove("projet-menu-actuel");
});
loginCon.addEventListener("click", function (e) {
  e.preventDefault();
  location.href = "login.html";
  loginCon.classList.add("projet-menu-actuel");
  projet.classList.remove("projet-menu-actuel");
  contact.classList.remove("projet-menu-actuel");
  edit.classList.remove("projet-menu-actuel");
  logout.classList.remove("projet-menu-actuel");
});
edit.addEventListener("click", function (e) {
  e.preventDefault();
  location.href = "homepage_edit.html";
  edit.classList.add("projet-menu-actuel");
  projet.classList.remove("projet-menu-actuel");
  contact.classList.remove("projet-menu-actuel");
  loginCon.classList.remove("projet-menu-actuel");
  logout.classList.remove("projet-menu-actuel");
});

logout.addEventListener("click", function (e) {
  e.preventDefault();
  location.href = "login.html";
  logout.classList.add("projet-menu-actuel");
  projet.classList.remove("projet-menu-actuel");
  contact.classList.remove("projet-menu-actuel");
  loginCon.classList.remove("projet-menu-actuel");
  edit.classList.remove("projet-menu-actuel");
});
