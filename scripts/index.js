const date = new Date();
let p = document.getElementById("test");
let a = document.createElement("p");
let birthdate = new Date("2002-02-07");
let day = birthdate.getDay();
let month = birthdate.getMonth();
p.innerHTML = month;
//////////////////////////////////////////

let website = window.location.href;
let address = document.getElementById("address");
let protocol = window.location.port;
address.innerHTML = protocol;

/////////////////////////////////////
const back = getElementById("back");
let history = window.history.length;
back.innerHTML = history;

window.location.href = "https://www.instagram.com";
