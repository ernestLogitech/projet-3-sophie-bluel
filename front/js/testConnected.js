let stoLogin = localStorage.getItem('connectLogin');
if(stoLogin != null){
afficherLogout();
masquerLogin();
}else{
afficherLogin()
masquerLogout()
}
function afficherLogout() {
return document.getElementById("logout").style.display = "block";
}
function masquerLogout() {
return document.getElementById("logout").style.display = "none";
}
function masquerLogin() {
return document.getElementById("loginCon").style.display ="none";
}
function afficherLogin() {
return document.getElementById("loginCon").style.display ="block";
}
document.getElementById("logout").addEventListener("click", function() {   
    localStorage.clear();
    //sessionStorage
    //stoLogin = localStorage.setItem("stoLogin", "[]");
    //stoLogin = window.localStorage.removeItem("stoLogin","[]");
  // window.localStorage.removeItem("stoLogin"); faudrai ecrsser le login
console.log(stoLogin)
location.href='login.html';
});