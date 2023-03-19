/*
<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<title>Sophie Bluel - Architecte d'intérieur</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Work+Sans&display=swap" rel="stylesheet">
	<meta name="description" content="">
	<link rel="stylesheet" href="./assets/style.css">
</head>
<body>
<header>
	<h1>Sophie Bluel <span>Architecte d'inteérieur</span></h1>
	<nav>
		<ul> 
			<li> <a class="projets" href="index.html">projets</a></li>
			<li> <a class="contact" href="login.html">contact</a></li>
            <li id="loginCon"> <a class="login" href="login.html">login</a></li> 
			<li> <a class="Homepage" href="homepage_edit.html">Edit</a></li>
			<li id="logout"> <a class="logout" onclick="deconnexion">logout</a></li>
			<li><img src="./assets/icons/instagram.png" alt="Instagram"></li>
		</ul>
	</nav>
</header>
<body>
    <section id="login">
		<h2>Log In ${resultValues.userId}</h2>
		<h2 id="nomemail"> '${stoLogin.email}'</h2>
		<form action="#" method="post" id="form">
			<label for="email">E-mail</label>
			<input type="email" name="email" id="email">
			<label for="name">Mot de passe</label>
			<input type="password" name="password" id="password">
			
			<input type="submit" value="Se connecter">
			<div id="res-error"></div>
			<h2 class="mot-de-pass-oublier">Mot de passe oublié</h2>
			
		</form>
	</section>
	<script type="text/javascript" src="js/login.js"></script>
</body>
</html>
*/ 



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
    result = JSON.stringify(result);
    login = JSON.stringify(login);
    localStorage.setItem('resultValue',result);
    localStorage.setItem('login',login);
    resultValues =localStorage.getItem('resultValue');
    stoLogin = localStorage.getItem('login');
    afficheruserconnect();
    resultValues =  JSON.parse(resultValues);
    console.log(resultValues);
    console.log(stoLogin);
    //masquerLogin()
    // location.href='index.html';
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
