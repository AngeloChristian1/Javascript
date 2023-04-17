// let table = {
//   color: "brown",
//   size: "2m",
//   weight: "2kg",
//   legs: 4,
//   shape: "rectangle",
// };
// // console.log(table);
// table.shape = "circular";
// table.price = 2000;
// // console.log(table);

// let arr1 = ["Albert", "Robert", "Kelly"];
// let weights = [65, 58, 55];
// let properties = [
//   {
//     color: "brown",
//     height: 1.6,
//     age: 27,
//     hair: "ordinary",
//     status: "married",
//   },
//   {
//     color: "dark",
//     height: 1.64,
//     age: 22,
//     hair: "ordinary",
//     status: "single",
//   },
//   {
//     color: "dark",
//     age: 20,
//     height: 1.68,
//     hair: "dreadlocks",
//     status: "single",
//   },
// ];
// // console.log(arr1);
// // console.log(weights);
// // console.log(properties);
// console.log(properties[2].color);

// let varName = "Hello class, xyz";
// let varUppercase = varName.toUpperCase();

// console.log(varUppercase);
// console.log(varUppercase.toLowerCase);

// console.log(varName.slice(11, 15));
// console.log(varName.slice(6, 11));
// console.log(varName.replace("class", "group"));
// let str1 = varName.split(" ");
// console.log(str1);
///////////////////////////////////////////////////////////////////////////////
let body = document.getElementsByTagName("body")[0];
let text = document.getElementsByTagName("p")[0].innerHTML;
// console.log(text);
//////answering 1
// console.log(
//   text
//     .replace("we", "I")
//     .replace("I have", "you have")
//     .replace("We did", "I did")
// );
// let newText = text.replace("we", "I").replace("I", "You").replace("We ", "I ");
// let splitText = text.split(".");
// splitText[1].replace("we did", "I did");
// console.log(splitText[1].replace("We did", "I did"));

// let list = document.createElement("ol");
// let listItem = document.createElement("li");
// listItem.appendChild(newText);
// body.appendChild(listItem);

// let secondText = newText.toUpperCase();
// console.log(secondText);

// let thirdText = secondText.replace("exercise", "practice");
// console.log(thirdText);

// listItem.appendChild(newText);
// listItem.appendChild(secondText);
// listItem.appendChild(thirdText);

// // list.appendChild(listItem);
// body.appendChild(newText);

// let sentences = text.split(".");
// let sent1 = sentences[0].replace("we", "you");
// let sent2 = sentences[1].replace("We", "You");
// let sent3 = sentences[2].replace("I", "you");
// let sent4 = sentences[3];
// let result = sent1 + "." + sent2 + "." + sent3 + "." + sent4;
// console.log(result);

// let sent2b = sent2.toUpperCase();
// let result2 = sent1 + "." + sent2b + "." + sent3 + "." + sent4;
// console.log(result2);

// let result3 = result2
//   .replace("EXERCISE", "PRACTICE")
//   .replace("exercise", "practice", "g");
// console.log(result3);

// let a = "11";
// let b = 1;
// let d = parseInt(a);
// let c = d + b;
// console.log(c);
// let e = 2;
// e = e.toFixed(2);
// console.log(e);

let arrayName = ["keynes", "Elvis", "Celestin", "Robert"];
let allName = arrayName.join(",");
console.log(allName);
let revName = arrayName.reverse();
console.log(revName);

let Array1 = "Today is Tuesday";
let Arraysplit = Array1.split("");
let revArray1 = Arraysplit.reverse();
revArray1 = revArray1.join("");
console.log(revArray1);

let a = 10024;
console.log(parseInt(a.toString().split("").reverse().join("")));

let s = "i.like.this.program.very.much";
console.log(s.split(".").reverse().join("."));
