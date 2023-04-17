// let btn = document.getElementById("btn");
// const time = setInterval(() => {
//   window.alert('"Hello"');
//   //   window.location.href = "https://www.twitter.com";
//   console.log("Whats Up");
// }, 5000);

// btn.addEventListener("click", () => {
//   clearInterval(time);
// });

////////////////////////////////////////////
let clock = document.getElementById("clock");
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  clock.innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}
///////
let birthDate = new Date(year, month - 1, day);
let ageInMilliseconds = today - birthDate;
let ageInDays = ageInMilliseconds / (1000 * 60 * 60 * 24);
let ageInYears = Math.floor(ageInDays / 365);
let ageInMonths = Math.floor((ageInDays % 365) / 30)

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

let a = 'Data "Hello" types';
let b = 2023;
let c = "09";
let d = false;
let e = 1.5;
// let f= 10,000,000;

console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
