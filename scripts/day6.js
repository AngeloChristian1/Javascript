// console.log(100**3 + 9874);
// console.log(((((24-5)**2)+1)/(6*8)) + ((5**2)/76));
// function equation(){
//     let sum = (100**3) + 9874;
//     console.log('sum equation:',sum);
//     return sum;
// }
// let a = equation();
// let salary= a+ 1000
// console.log('salary:' ,salary)

// function callMe(){
//     return 'Keyness';
// }
// let name= callMe();
// console.log( 'name display:',name);

// function addition( x, y){
//     let sum = x + y;
//     return sum;
// }
// let w=40;
// let q=20;
// let sum= addition(w , q)
// console.log('sum= ', sum)

function count(text){
   
      textStrip= text.split(';')
    return textStrip.length  
  
    }
    

let text= 'last one'
let ans = count(text);
console.log('String size: ',ans)

function count2(text1){
   console.log(' length:',text1.split(';').length) 
}
count2(text)