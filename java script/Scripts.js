
function enBlanco1() {
Element =document.getElementById("pers");
Element.src="img/personal2.png";
}
function enNegro1() {
    Element =document.getElementById("pers");
    Element.src="img/personal.png";
}

function enBlanco2() {
    Element =document.getElementById("labo");
    Element.src="img/laboral2.png";
}
 function enNegro2() {
    Element =document.getElementById("labo");
    Element.src="img/laboral.png";
}

function enBlanco3() {
    Element =document.getElementById("habi");
    Element.src="img/habilidades2.png";
}
function enNegro3() {
    Element =document.getElementById("habi");
    Element.src="img/habilidades.png";
}

function enBlanco4() {
    Element =document.getElementById("estu");
    Element.src="img/estudios2.png";
}
function enNegro4() {
    Element =document.getElementById("estu");
    Element.src="img/estudios.png";
}



const message = document.getElementById("message");
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (validateForm()) {
    submitForm();
  }
})

function validateForm() {
  if (message.value === "") {
    alert("Please enter your message.");
    return false;
  }
  return true;
}

function submitForm() {

  const data = {
    message: message.value,
  }

}
