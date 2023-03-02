const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginBtnClick(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const savedUsername = loginInput.value;
  localStorage.setItem(USERNAME_KEY, savedUsername);
  paintGreeting(savedUsername);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
function paintGreeting(savedUsername) {
  greeting.innerHTML = `Hello ${savedUsername}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginBtnClick);
} else {
  paintGreeting(savedUsername);
}
