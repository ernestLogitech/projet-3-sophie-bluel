

document
  .getElementById("form")
  .addEventListener("submit", send);
  function send(e) {
    e.preventDefault();
    var vemail = document.getElementById("email").value; 
    var password = document.getElementById("password").value;   
    console.log(password);
    console.log("je suis dans la function");
    if(vemail==" "){
        getemailValidation().innerText = "email invalide";
    }
    /*
    fetch("https://mockbin.com/request", {
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
document
  .getElementById("email")
  .addEventListener("input", function(e) {
    document
      .getElementById("res-error").style.display = "none";
     
});
function getemailValidation() {
    return document.getElementById("res-error");
  }