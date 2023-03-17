
let resultValues;

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
              let login = { 
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
      getemailValidation().innerText = "email ou mot de passe invalide";
    }
    else{
      result = JSON.stringify(result);
       localStorage.setItem('resultValue',result);
        resultValues =localStorage.getItem('resultValue');
       resultValues =  JSON.parse(resultValues);
       console.log(resultValues);
// location.href='index.html';
    }
   
  }
    catch(error){
      console.log(error);
    }
      /*
      result = JSON.stringify(result);
       localStorage.setItem('resultValue',result);
       let resultValues =localStorage.getItem('resultValue');
       resultValues =  JSON.parse(resultValues);
        console.log(resultValues);
        if()
        */
      /*
      fetch('http://localhost:5678/api/users/login', {  
      method: "POST",
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      },
      
      body: JSON.stringify(login)
    })
    .then(function(res) {
      console.log(res.body);
      if (res.ok) {
        console.log(res);
       // return res.json();
      }
      else{
        getemailValidation().innerText = "email invalide";
      }
    })*/
    /*
    }
  */
    /*
    fetch("https://mockbin.com/request", {  res-error
      method: "POST",
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({value: document.getElementById("value").value})
    })
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(value) {
        document
          .getElementById("result")
          .innerText = value.postData.text;
    });
    */
}

document.getElementById("form").addEventListener("submit", send);

document.getElementById("email").addEventListener("input", function(e) {
  document.getElementById("res-error").style.display = "none";    
});
document.getElementById("password").addEventListener("input", function(e) {
  document.getElementById("res-error").style.display = "none";    
});
function getemailValidation() {
    return document.getElementById("res-error");
  }