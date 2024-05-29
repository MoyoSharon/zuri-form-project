const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const iError = document.querySelectorAll('.iError');
const errormsg = document.querySelectorAll('.errormsg');
const toggle = document.querySelector('.toggle');
console.log(email);

// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value.trim();
  const lName = lastName.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();

  // Check first name
  if (fName === "") {
    firstName.classList.add('error');
    iError[0].style.display = "block";
    errormsg[0].innerHTML = "First Name cannot be empty";
  } else {
    firstName.classList.remove('error');
    iError[0].style.display = "none";
    errormsg[0].innerHTML = "";
  }
  // Check last name

  if (lName === "") {
    lastName.classList.add('error');
    iError[1].style.display = "block";
    errormsg[1].innerHTML = "Last Name cannot be empty";
  } else {
    lastName.classList.remove('error');
    iError[1].style.display = "none";
    errormsg[2].innerHTML = "";
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === "") {
    email.classList.add('error');
    iError[2].style.display = "block";
    errormsg[2].innerHTML = "Looks like this is not an email";
  } else {
    email.classList.remove('error');
    iError[2].style.display = "none";
    errormsg[2].innerHTML = "";
  }

  // Check password

  if (passwordVal === "") {
    password.classList.add('error');
    iError[3].style.display = "block";
    errormsg[3].innerHTML = "Password cannot be empty";
    toggle.style.right = "40px";
  } else {
    password.classList.remove('error');
    iError[3].style.display = "none";
    errormsg[3].innerHTML = "";
    toggle.style.right = "16px";
  }

  console.log(fName, lName, emailVal, passwordVal);

});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

toggle.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});


function reveal() {
  if (password.type === "password") {
    toggle.classList.remove("fa-eye");
    toggle.classList.add("fa-eye-slash");
  } else {
    toggle.classList.remove("fa-eye-slash");
    toggle.classList.add("fa-eye")
  }
}