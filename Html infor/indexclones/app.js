// let btns = document. querySelectorAll("button");

// for(btn of btns) {
//     //  onclick = sayHello;

//     btn.addEventListener("click", sayHello);
//     btn,addEventListener("click", sayName);
     
// }




// // btn.onclick = function () {
// //     console.log("button was click")
// // }

// function sayHello() {
//     alert("hello!")
// }

// function sayName () {
//     alert("shivam singh");
// }
// let btn = document.querySelector("button");

// btn.addEventListener( "click", function () {
// let h1 = document.querySelector("h1");
// let randomColor = getRandomColor();
// h1.innerText = randomColor;

// let div = document.querySelector("div");
// div.style.backgroundColor = randomColor; 


// console.log("color updated")
// });

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }

// let form = document.querySelector("form");
// form.addEventListener("submit" ,function(event) {
//     event.preventDefault();

//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");
//     console.log(user.value);
//     console.log(pass.value);
// });

// let inp = document.querySelector("#text");
// let h2 = document.querySelector("h2");
// let letter = /^[a-zA-Z ]*$/;

// inp.addEventListener("input", function () {
//     console.log(inp.value);
//     h2.innerText = inp.value;
//     inp.value.letter= letter.Match(letter);
    
    
// });
/*varivale::>
const=> ko kevel ek he bar creat kr sakte hay and usme koi change nahi kr sakte
let=> ko creat krne ke bad kabhi bhi kuch bhi change kr sak te hay
var=> ye javascript ka old varsecion hay jayse let he vase he ye hay
 const accountId = 23456;
 let accountEmail = shivamkumarsingh.chu98;
 var accountPassword = "23456"
 accountCity = jaipur

 */
/*
//datatypes=> premative
numbar
bigint
boolean== true/false
null==
undefined==
string==""
*/
/*
object
*/
/*Conversion==>
agar koi value ko convert karna ho like string to Number , Number to string , Number to boolen to ase kuch mathed hay conversion ke
let score = "33";
console.log(typeof score)
console.log(typeof(score));
let valueInNumber= Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);
// "33" => 33
// "33acb" => NaN
// true => 1; false => 0
let isLoggedIn = "shivam"
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
*/
//operation........
/*
+
-
*
/
%
**
*/
/*Compresion =>
>
<
>=
<=
!=
==
===
*/
// datatype interview perpuse==>
//type of data premetive nonpremitive
   /*
   primitive ==> 
   type: string , Number , Boolen , null undefined , symbol, Bigint
   nonpramitiv==>(Reference)
   type: Array[] , objects{} , Function(){}
   what is type of javascript?
   javascript Documentsion
   https://262.ecma-international.org/5.1/#sec-1.4.3
   */

  /*Memory
  */
//  function hello(){
//    console.log("insyde call")
//    console.log("hello word")
//  }

//  function demo(){
//    console.log("second function")
//    hello()
//  }
//  console.log("the end")

//  demo()

//  console.log("buy buy")

// function one(){
//    console.log("therd")
//    return 1;
// }

// function two() {
//    console.log("second")
//    return one() + one()
// }
// function three() {
//    console.log("first")
//    let ans = two() + one()
//    console.log(ans)
// }

// three();

// function savetoDb(data ,susses , failear) {
//    let internetSpeed = Math.floor(Math.random() * 10) + 1
//    if(internetSpeed > 4) {
//       susses();
//    }else {
//       failear();
//    }
// }
// savetoDb("shivam singh",
//   () => {
//    console.log("susses: your data was saved");
//    savetoDb("shivam singh",
//    () => {
//       console.log("susses2 : your was good week");
//    },
//    () => {
//       console.log("susses2 : your network was week")
//    })
// },
// () => {
//    console.log("week connection. data not saved")
// })

let sec = 0;

setInterval( () => {
   sec++
   const h = parseInt(sec / 3600);
   const m = parseInt((sec % 3600) / 60);
   const s = parseInt(sec % 60);
   const str = h+":"+m+":"+s;
   document.getElementById("main").innerHTML = str
}, 1000)





























 






























   
    
























































































