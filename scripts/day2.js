let save = document.getElementById("save");
save.addEventListener("click", () => {
  console.log("hello");
});
save.addEventListener("dblclick", () => {
  console.log("how are you");
});
///////////////////////////

let form = document.getElementById("form");
// let login = document.getElementById("login");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   window.alert("This is a form");
  let text = form.name.value;
  let pass = form.password.value;
  //   window.alert(pass + " / " + text);
  //   window.alert();
  if (text == "") {
    alert("please fill the name");
  }
  form.reset();
});
