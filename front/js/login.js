
    let resultValues;
    let login;
    let stoLogin;
    async function send(e) {

    try{
    e.preventDefault();
    var vemail = document.getElementById("email").value; 
    var password = document.getElementById("password").value;   
    console.log(vemail);
    console.log(password);
    console.log("je suis dans la function");
    let response;
    if(vemail !==" " && password !==" "){
    login = { 
    email:vemail,
    password:password
    }

    response = await fetch('http://localhost:5678/api/users/login', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(login)
    });
    }
    let result = await response.json();
    // console.log(result.error);
    if(result.error){
    getemailValidation();
    }
    else{
      localStorage.setItem('login',login);
     // stoLogin = localStorage.getItem('login');
     stoLogin = login
      location.href='index.html';
    result = JSON.stringify(result);
    login = JSON.stringify(login);
    localStorage.setItem('resultValue',result);
    localStorage.setItem('login',login);
    resultValues =localStorage.getItem('resultValue');
    
    afficheruserconnect();
    resultValues =  JSON.parse(resultValues);
    console.log(resultValues);
    console.log(stoLogin);
    /*setTimeout(() => {
      document.location.reload();
      location.href='index.html';
    }, 3000);*/
    
    
    //location.href='index.html';
    }

    }
    catch(error){
    //  console.log(error);
    getemailValidation();
    }


    }
    
    document.getElementById("form").addEventListener("submit", send);

    document.getElementById("email").addEventListener("input", function(e) {
    document.getElementById("res-error").style.display = "none";    
    });
    document.getElementById("password").addEventListener("input", function(e) {
    document.getElementById("res-error").style.display = "none";    
    });
    function getemailValidation() {
    return document.getElementById("res-error").innerText = "email ou mot de passe invalide";
    }

    function afficheruserconnect() {
    return document.getElementById("nomemail").innerText = login.email;
    }