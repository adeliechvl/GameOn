function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById("reserve");
const submitBtn = document.getElementById("btn-submit");
const closeBtn = document.getElementById("closeBtn");
const confirmationMessage = document.getElementById("confirmationMessage");

// at first form is empty or some inputs are not correct
let formConfirmation = false;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.forEach((close) => close.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// confirmation message and close button not displayed if form not validated
closeBtn.style.display = "none";
confirmationMessage.style.display = "none";

/// function to check if form inputs are correct, if not error message is displayed
function inputsVerification() {

  // first name input
  const first = document.querySelector("#first"); // we call "for" input
  const firstError = document.getElementById("firstError"); // and error id input
  const verifName = /^[A-Za-z]+$/; // regex to check first and last name
  if (
    first.value == null || // if input empty = error
    !first.value.match(verifName) || // if input doesn't respect regex = error
    first.value.length < 2 //if input length id less than 2 characters = error
  ) {
    firstError.textContent = // error message is displayed
      "Veuillez entrer au moins 2 caractères ou plus pour le champ du prénom.";
    firstError.style.color = "red"; // error input style
    firstError.style.fontSize = "12px";
    first.style.borderColor = "red";
    first.style.borderWidth = "2px";
    return formConfirmation === false; // input incorrect so form incomplete
  } else {
    firstError.style.display = "none"; // if correct = error not displayed
    first.style.borderColor = "green"; // correct input style
    first.style.borderWidth = "2px";
  }

  // last name input
  const last = document.querySelector("#last");
  const lastError = document.getElementById("lastError");
  if (
    last.value == null ||
    !last.value.match(verifName) ||
    last.value.length < 2
  ) {
    lastError.textContent =
      "Veuillez entrer au moins 2 caractères ou plus pour le champ du nom.";
    lastError.style.color = "red";
    lastError.style.fontSize = "12px";
    last.style.borderColor = "red";
    last.style.borderWidth = "2px";
    return formConfirmation === false;
  } else {
    lastError.style.display = "none";
    last.style.borderColor = "green";
    last.style.borderWidth = "2px";
  }

  // email input
  const email = document.querySelector("#email");
  const emailError = document.getElementById("emailError");
  let verifEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value == null || !email.value.match(verifEmail)) {
    emailError.textContent =
      "L'adresse email n'est pas valide.";
    emailError.style.color = "red";
    emailError.style.fontSize = "12px";
    email.style.borderColor = "red";
    email.style.borderWidth = "2px";
    return formConfirmation === false;
  } else {
    emailError.style.display = "none";
    email.style.borderColor = "green";
    email.style.borderWidth = "2px";
  }

  // birthdate input
  const birthdate = document.querySelector("#birthdate");
  const birthdateError = document.getElementById("birthdateError");
  if (!birthdate.value) {
    birthdateError.textContent =
      "Veuillez entrer une date de naissance valide.";
    birthdateError.style.color = "red";
    birthdateError.style.fontSize = "12px";
    birthdate.style.borderColor = "red";
    birthdate.style.borderWidth = "2px";
    return formConfirmation === false;
  } else {
    birthdateError.style.display = "none";
    birthdate.style.borderColor = "green";
    birthdate.style.borderWidth = "2px";
  }

  // participation quantity input
  const quantity = document.querySelector("#quantity");
  const quantityError = document.getElementById("quantityError");
  if (quantity.value === "") {
    quantityError.textContent =
      "Ce champ ne peut pas être vide.";
    quantityError.style.color = "red";
    quantityError.style.fontSize = "12px";
    quantity.style.borderColor = "red";
    quantity.style.borderWidth = "2px";
    return formConfirmation === false;
  } else {
    quantityError.style.display = "none";
    quantity.style.borderColor = "green";
    quantity.style.borderWidth = "2px";
  }

  // participation location input
  const location = document.getElementsByName("location");
  const locationError = document.getElementById("locationError");
  if (
    !(
      location[0].checked || // tab to chech if one checkbox is selected
      location[1].checked ||
      location[2].checked ||
      location[3].checked ||
      location[4].checked ||
      location[5].checked
    )
  ) {
    locationError.textContent = "Veuillez sélectionner une location";
    locationError.style.color = "red";
    locationError.style.fontSize = "12px";
    return formConfirmation === false;
  } else {
    locationError.style.display = "none";
    location.style = "default";
  }

  // terms of use checkbox
  const termsOfUse = document.querySelector("#checkbox1");
  const termsOfUseError = document.getElementById("termsOfUseError");
  if (!termsOfUse.checked) { // if checkbox not checked error
    termsOfUseError.textContent =
      "Vous devez vérifier que vous acceptez les termes et conditions pour valider votre inscription.";
    termsOfUseError.style.color = "red";
    termsOfUseError.style.fontSize = "12px";
    termsOfUse.style.borderColor = "red";
    termsOfUse.style.borderWidth = "3px";
    return formConfirmation === false;
  } else {
    termsOfUseError.style.display = "none";
    termsOfUse.style = "default";
  }
  return (formConfirmation = true);
}

// function to check if form is correct, if yes confirmation message is displayed
function formValidation(event) {
  inputsVerification(); // we call function to check if all inputs are correct
  event.preventDefault();
  if (formConfirmation === true) { // if form correct and complete :
    form.style.display = "none"; // form is hidden
    confirmationMessage.style.display = "flex"; // confirmation message style is displayed 
    confirmationMessage.style.textAlign = "center";
    confirmationMessage.style.fontSize = "36px";
    submitBtn.style.display = "none"; // submit button hidden
    closeBtn.style.display = "block"; // closebtn is displayed
    closeBtn.addEventListener("click", closeModal); // event to close modal when click on closebtn

    // data stored in local storage if correct
    // we get item from class name + value and store it in local storage
    localStorage.setItem("first", document.querySelector("#first").value);
    localStorage.setItem("last", document.querySelector("#last").value);
    localStorage.setItem("email", document.querySelector("#email").value);
    localStorage.setItem("birthdate", document.querySelector("#birthdate").value);
    localStorage.setItem("quantity", document.querySelector("#quantity").value);
    localStorage.setItem("location", document.querySelector("input[name='location']:checked").value);
    localStorage.setItem("termsOfUse", document.querySelector("#checkbox1").value);
  }
}

// event to validate form when click "c'est parti" button
form.addEventListener("submit", formValidation);
