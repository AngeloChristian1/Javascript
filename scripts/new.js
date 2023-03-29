// // console.log("Angelo Chris");
// // console.log(document.getElementById("hash"));
// // console.log(document.getElementById("test"));
// // console.log(document.getElementsByTagName("h3")[0]);
// // console.log(document.getElementById("link").href);
// // console.log(document.getElementById("hash").innerHTML);
// // console.log(document.getElementById("main").innerHTML);
// // document.getElementsByTagName("h1")[0].innerHTML = "Javsript is Awesome";
// // document.getElementsByTagName("p")[0].style.color = "green";
// // document.getElementsByTagName("p")[0].style.paddingTop = "50px";
// // console.log(1 + 2);
// // console.log("Angelo");

// // const body = document.getElementsByTagName("body");
// //creating first division
// const main = document.createElement("div");
// let test = document.createElement("h3");
// let para = document.createElement("p");
// let hash = document.createElement("p");
// let span = document.createElement("span");
// let link = document.createElement("a");

// //creating second division
// const anchol = document.createElement("div");
// let image1 = document.createElement("img");

// //Elements without divs
// let lasth1 = document.createElement("h1");

// //creating second division
// const anchol2 = document.createElement("div");

// //giving attributes and content of first division
// main.id = "main";
// test.id = "test";
// test.innerHTML = "Hello World";

// para.innerHTML = "Today we are learning practical javasript";

// hash.id = "hash";
// hash.innerHTML = "#make Progress";

// span.innerHTML = "Some Text";

// link.id = "link";
// link.href = "./about.html";
// link.innerHTML = "About Page";

// //giving attributes and content of second division
// anchol.class = "anchol";

// image1.id = "image1";
// image1.src = "./imgs/ccc.jpg";
// image1.alt = "test";

// //elemnt outside div
// lasth1.innerHTML = "Javascript is powerful";

// ///Appending main
// main.appendChild(test);
// main.appendChild(para);
// main.appendChild(hash);
// main.appendChild(span);
// main.appendChild(link);

// //Appending to divisions to body
// document.body.appendChild(main);
// //appending image1
// document.body.appendChild(image1);

// document.body.appendChild(anchol);
// // Appending h1
// document.body.appendChild(lasth1);

// document.body.appendChild(anchol2);

// Define a list of possible user inputs and responses
// const responses = {
//   hello: "Hi there!",
//   "how are you": "I'm doing well, thanks for asking.",
//   "what is your name": "My name is Chatbot.",
//   "what can you do":
//     "I can help you with simple tasks and answer your questions. What can I help you with?",
// };

// // Listen for user input
// const inputField = document.querySelector("#chatbot-input");
// const outputField = document.querySelector("#chatbot-output");

// inputField.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     const userInput = inputField.value.toLowerCase();
//     const response =
//       responses[userInput] || "Sorry, I don't understand. Can you try again?";
//     outputField.innerHTML = response;
//     inputField.value = "";
//   }
// });

// // Listen for user input
// const inputField = document.querySelector("#chatbot-input");
// const outputField = document.querySelector("#chatbot-output");

// inputField.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     const userInput = inputField.value.toLowerCase();
//     // Use pre-defined responses or call an API to generate a response
//     const response = "Hello, how can I help you?";
//     outputField.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
//     outputField.innerHTML += `<p><strong>Chatbot:</strong> ${response}</p>`;
//     inputField.value = "";
//   }
// });

// Get DOM elements
const chatArea = document.querySelector(".chat-area");
const inputField = document.querySelector('input[type="text"]');
const sendBtn = document.querySelector("button");

// Listen for send button click
sendBtn.addEventListener("click", () => {
  sendMessage();
});

// Listen for Enter key press
inputField.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});

// Send a message
function sendMessage() {
  const message = inputField.value;
  if (message.trim() !== "") {
    const messageDiv = document.createElement("div");
  }
}
