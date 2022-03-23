// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const btnClose = document.querySelector(".close");
const modalContent = document.querySelector(".content");

const modalConfirmation = document.querySelector("#confirmation-modal");
const btnThank = document.querySelector(".closeThank"); 


function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


/////////////////////////////////////////////////////////////////
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalContent.style.display = "block";
  modalConfirmation.style.display = 'none';
}


// Close modal
btnClose.addEventListener('click', function(){
  modalContent.style.display = 'none';
  modalbg.style.display = "none";
})


// Close thanks
btnThank.addEventListener('click', function(){
  modalConfirmation.style.display = 'none';
  // modalContent.style.display = 'none';
  modalbg.style.display = "none";
})


/////////////////////////////////////////////////////////////////
// Validate form
document.querySelector("form").addEventListener("submit", function(e){
  if (validate(e)) {
    console.log("Formulaire validé")
    // Open thanks
    modalConfirmation.style.display = 'block';
    modalContent.style.display = 'none';
  }  
});


// Check form
function validate(e) {
  // on enlève le raffraichissement par défaut
  e.preventDefault();

  let formValidate = true;

  // Regex
  const prenomRegex = /^[A-Za-z\u00C0-\u00FF]+[ \-']?[[A-Za-z\u00C0-\u00FF]+$/g;
  const nomRegex = /^[A-Za-z\u00C0-\u00FF]+[ \-']?[[A-Za-z\u00C0-\u00FF]+$/g;

  // expression régulière pour avoir le bon format de la date (à voir à la fin)
  // const dateRegex = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/g;
  
  // For the firstname
  let prenom = document.forms["reserve"].elements["firstname"]; 
  const erreurMessagePrenom = prenom.parentNode;
  
  // console.log(prenom);
  // console.log(prenom.value.length);
  // console.log(prenom.parentNode);


  // For the lastname
  let nom = document.forms["reserve"].elements["lastname"]; 
  const erreurMessageNom = nom.parentNode;
  
  // console.log(nom);
  // console.log(nom.value.length);
  // console.log(nom.parentNode);


  // For the email
  let mail = document.forms["reserve"].elements["email"]; 
  const erreurMessageMail = mail.parentNode;
  
  // console.log(mail);
  // console.log(mail.value);
  // console.log(mail.parentNode);


  // For the birthdate
  let dateNaissance = document.forms["reserve"].elements["birthdate"]; 
  const erreurMessageDate = dateNaissance.parentNode;
  
  // console.log(dateNaissance);
  // console.log(dateNaissance.value);
  // console.log(dateNaissance.parentNode);


  // For the number of tournaments
  let nombreTournois = document.forms["reserve"].elements["quantity"]; 
  const erreurMessageNbTournois = nombreTournois.parentNode;

  // console.log(nombreTournois);
  // console.log(nombreTournois.value);
  // console.log(nombreTournois.parentNode);


  // For the choice of tournaments
  let choixTournois = document.forms["reserve"].elements["location"]; // RadioNodeList
  const erreurMessageTournois = choixTournois[0].parentNode;
  
  // console.log(choixTournois);
  // console.log(choixTournois[0]);
  // console.log(choixTournois.value);
  // console.log(choixTournois.parentNode);
  // console.log(choixTournois[2].parentNode);
  

  // For terms of use
  let conditionUtilisation = document.forms["reserve"].elements["condition"]; 
  const erreurMessageCondition = conditionUtilisation.parentNode;

  // console.log(conditionUtilisation);
  // console.log(conditionUtilisation.parentNode);
  

  if (prenom.value.length < 2 || prenomRegex.test(prenom.value) === false) { 
    erreurMessagePrenom.dataset.errorVisible = "true";
    formValidate = false; 
  } else {
    erreurMessagePrenom.dataset.errorVisible = "false";
  }

  if (nom.value.length < 2 || nomRegex.test(nom.value) === false) {  
    erreurMessageNom.dataset.errorVisible = "true";
    formValidate = false; 
  } else {
    erreurMessageNom.dataset.errorVisible = "false";
  }

  if (mail.value == "") {  
    erreurMessageMail.dataset.errorVisible = "true";
    formValidate = false; 
  } else {
    erreurMessageMail.dataset.errorVisible = "false";
  }

  if (dateNaissance.value == "" ) {  
    erreurMessageDate.dataset.errorVisible = "true";
    formValidate = false; 
  } else {
    erreurMessageDate.dataset.errorVisible = "false";
  }

  if (nombreTournois.value == "" || typeof nombreTournois === 'number') {  
    erreurMessageNbTournois.dataset.errorVisible = "true";
    formValidate = false; 
  } else {
    erreurMessageNbTournois.dataset.errorVisible = "false";
  }

  if (choixTournois.value == "" ) {  
    erreurMessageTournois.dataset.errorVisible = "true";
    formValidate = false;  
  } else {
    erreurMessageTournois.dataset.errorVisible = "false";
  }

  if (conditionUtilisation.checked == false) {  
    erreurMessageCondition.dataset.errorVisible = "true";
    formValidate = false; 
  } else {
    erreurMessageCondition.dataset.errorVisible = "false";
  }
    
  return formValidate; 
}