// console.log(1 % 4);
// console.log(2 % 4);
// console.log(4 % 4);
// console.log(5 % 4);
// console.log(6 % 4);
// console.log(7 % 4);
// console.log(8 % 4);
// console.log(9 % 4);
// console.log(0 % 4);
// if (5 % 5 == 0) {
//   console.log("5 is divisible by 5");
// } else if (4 % 4 == 0) {
//   console.log("4 is not divisible by 4");
// } else {
//   console.log("5 is not divisible by 5");
// }

let arrayName = [1, 3, 4, 8];

function check(arr) {
  let length = arr.length;
  if (length % 2 == 0) {
    console.log("The length of array is,", length, "and it is Even");
  } else length % 2 != 0;
  {
    console.log("The length of array is,", length, "and it is Odd");
  }
}
check(arrayName);
