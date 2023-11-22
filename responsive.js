let form = document.querySelector("form");
let firstName = form.elements["first-name"];
let lastName = form.elements["last-name"];
let email = form.elements["email"];
let mobile = form.elements["mobile"];
let send = form.elements["send"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!firstName.value) {
    firstName.nextElementSibling.innerText = "First name is required";
  } else {
    firstName.nextElementSibling.innerText = "";
  }
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!lastName.value) {
    lastName.nextElementSibling.innerText = "Last name is required";
  } else {
    lastName.nextElementSibling.innerText = "";
  }
  if (!mobile.value) {
    mobile.nextElementSibling.innerText = "Phone number is required";
  } else {
    mobile.nextElementSibling.innerText = "";
  }
  if (!email.value) {
    email.nextElementSibling.innerText = "Email is required";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
  ) {
    email.nextElementSibling.innerText = "Invalid email format";
  } else {
    email.nextElementSibling.innerText = "";
  }
  if (
    email.value !== "" &&
    mobile.value !== "" &&
    firstName.value !== "" &&
    lastName.value !== ""
  ) {
    alert("Your request successfully sent.Please wait for our response!");
  }
});
