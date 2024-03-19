const subForm = document.querySelector("button");
const userName = document.querySelector("#username");
const userTitle = document.querySelector("#title");
const userContent = document.querySelector("#content");

function startApp(event) {
  Username: userName.value,
  Title: userTitle.value,
  Content: userContent.value.trim(),

  event.preventDefault();
}

function subForm() {
  subForm.addEventListener("click", startApp);

  window.location.href = "./blog.html";
}
// Localstorage.setItem()

// second page
// localStorage.getItem()

// module 4 activities 21 - 26
