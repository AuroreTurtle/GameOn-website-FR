// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const btnClose = document.querySelectorAll(".close");
const modalContent = document.querySelector(".content");

const modalConfirmation = document.querySelector("#confirmation-modal");
const btnThank = document.querySelector(".closeThank");

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
let choixTournois = document.forms["reserve"].elements["location"];
const erreurMessageTournois = choixTournois[0].parentNode;

// console.log(choixTournois);
// console.log(choixTournois[0]);
// console.log(choixTournois.value);
// console.log(choixTournois[2].parentNode);

// For terms of use
let conditionUtilisation = document.forms["reserve"].elements["condition"];
const erreurMessageCondition = conditionUtilisation.parentNode;

// console.log(conditionUtilisation);
// console.log(conditionUtilisation.parentNode);

////////////////////////////////////////////////////////////////
/* Add the class "responsive" to the topnav element if it is not already there */
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/////////////////////////// Modal //////////////////////////////////////
// launch modal event
/* Adding an event listener to the modal buttons. */
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
/* The function launchModal() will display the modal background and modal content */
function launchModal() {
  modalbg.style.display = "block";
  modalContent.style.display = "block";
  modalConfirmation.style.display = "none";
}

// Close modal
/* The event listener for the cross close button. */
btnClose.forEach(function (i) {
  i.addEventListener("click", function () {
    modalContent.style.display = "none";
    modalbg.style.display = "none";
    modalConfirmation.style.display = "none";
  });
});

// Close thanks
/* Closing the modal thanks. */
btnThank.addEventListener("click", function () {
  modalConfirmation.style.display = "none";
  modalbg.style.display = "none";
});

/////////////////////////// Form //////////////////////////////////////
// Check form
/*
 ** we check that:
    1) the first and last name fields have a minimum of 2 characters
    2) the email field is not empty
    3) the date of birth field is not empty
    4) in the number of tournaments field, a numerical value is entered
    5) a radio button is checked
    6) the terms of use are checked
  else an error message is visible
 */
function validate(e) {
// prevents the default behaviour (refresh) of the form.
  e.preventDefault();

  let formValidate = true;

  // Regex
  const newRegex = /^[A-Za-z\u00C0-\u00FF]+[ \-']?[[A-Za-z\u00C0-\u00FF]+$/;
  // const dateRegex = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/g;

  if (prenom.value.length < 2 || newRegex.test(prenom.value) === false) {
    erreurMessagePrenom.dataset.errorVisible = "true";
    formValidate = false;
  } else {
    erreurMessagePrenom.dataset.errorVisible = "false";
  }

  if (nom.value.length < 2 || newRegex.test(nom.value) === false) {
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

  if (dateNaissance.value == "") {
    erreurMessageDate.dataset.errorVisible = "true";
    formValidate = false;
  } else {
    erreurMessageDate.dataset.errorVisible = "false";
  }

  if (nombreTournois.value == "" || typeof nombreTournois === "number") {
    erreurMessageNbTournois.dataset.errorVisible = "true";
    formValidate = false;
  } else {
    erreurMessageNbTournois.dataset.errorVisible = "false";
  }

  if (choixTournois.value == "") {
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


// Reset value
/**
 * Initialise the form by clearing all the fields and setting the error messages to hidden
 */
function initialise() {
  prenom.value = "";
  erreurMessagePrenom.dataset.errorVisible = "none";

  nom.value = "";
  erreurMessageNom.dataset.errorVisible = "none";

  mail.value = "";
  erreurMessageMail.dataset.errorVisible = "none";

  dateNaissance.value = "";
  erreurMessageDate.dataset.errorVisible = "none";

  nombreTournois.value = "";
  erreurMessageNbTournois.dataset.errorVisible = "none";

  for (let i = 0; i < choixTournois.length; i++) {
    choixTournois[i].checked = false;
  }

  document.forms["reserve"].elements["news"].checked = false;
}

// Validate form
/*
 ** by clicking on submit we send the data
  if the form is valid, the fields are initialized and the confirmation modal is opened
 */
document.querySelector("form").addEventListener("submit", function(e) {
  if (validate(e)) {
    initialise();

    // Open thanks
    modalConfirmation.style.display = "block";
    modalContent.style.display = "none";
  }
});