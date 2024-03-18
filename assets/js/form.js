const subForm = document.querySelector("button");
const userName = document.querySelector("#username");
const userTitle = document.querySelector("#title");
const userContent = document.querySelector("#content");

function startApp(event) {
  event.preventDefault();

  console.log(userName.value);
  console.log(userTitle.value);
  console.log(userContent.value);
}

subForm.addEventListener("click", startApp);

// Localstorage.setItem()

// second page
// localStorage.getItem()

// module 4 activities 21 - 26
