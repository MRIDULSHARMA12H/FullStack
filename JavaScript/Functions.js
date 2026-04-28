// function Printname() {
//     console.log("Mridul");
// }
// console.log(Printname());

//loops in functions

// function Print1to5() {
//     for(let i = 1 ; i<6 ; i++){
//         console.log(i);
//     }
// }

// console.log(Print1to5());

// if else statement in functions

// function isadult(age){
//     if( age >= 18){
//         console.log("you are adult");
//     }
//     else{
//         console.log("you are not adult");
//     }
// }
// console.log(isadult(20));


// Practice question
// Create a function to roll a dice and always display the value of the dice(1 to 6).

// function Rolldice(){
//     let dice = (Math.random()*6)+1;
//     dice = Math.floor(dice);
//     console.log(dice);
// };
// console.log(Rolldice());


// Function with Arguments

// function PrintInfo(name , age){
//     console.log(`${name}'s age is ${age}.`);
// }

// console.log(PrintInfo("Karna" , 20));

// Create the function that gives the average of 3 numbers
// function AvgOFnumber(a,b,c){
//     let avg = (a+b+c)/3;
//     console.log(avg);
// };
// console.log(AvgOFnumber(2,4,6));

// Cretae the function that prints the multiplication table of a number

// function Table(n){
//     for(let i = n ; i<=n*10 ; i+=n){
//         console.log(i);
//     }
// };

// Table(6);

// return keyword in functions

// function isAdult(age){
//     if(age>=18){
//         return "isadult";
//     }
//     else{
//         return "notadult";
//     }
// };
// console.log(isAdult(18));


// create a function that return the sum of numbers 1 to n

// function Nsum(n){
//     let sum = 0 ;
//     for(let i = 0 ; i<=7 ; i++){
//         sum +=i;
//     }
//     return sum;
// }

// console.log(Nsum(10));

// Create a function that return the concatination of all the Strings in an array

// let str = ["hi" , "hello" , "bye" , "!"];

// function  Concat(str){
//     let result = "";
//     for(let i = 0 ; i<str.length ; i++){
//         result+= str[i];
//     }
//     return result;
// }
// console.log(Concat(str));

// lexical Scope -> A variable defines outside a function can be accessible inside another
// function defines the variable declaration.(the opposite is not true)

// function outerfunc(){
//     let x = 5;
//     let y = 6;
//     function innerfunc(){
//         console.log(x); // we access x in the inner function
//     }
//     innerfunc();
// }

// console.log(outerfunc());


// function expression
// let sum = function(a,b){
//     return a +b;
// };
// sum = function(a,b){
//     return a *b;
// };
// console.log(sum(1,2));

// Higher Order functions
// A function theat does one or both :
// . takes one or multiple functions as arguments
// .return a function


// function multiplegreet(func,count){
//     for( let i = 1 ; i <= count ; i++){
//         func();
//     }
// }
// let greet = function(){
//     console.log("hello");
// }

// console.log(multiplegreet(greet , 5));



// Method funciton 

// let calculator = {
//     num : 56,
//     add : function(a,b){
//         return a +b;
//     },
//     sub : function(a,b){
//         return a -b;
//     },
//     mul : function(a,b){
//         return a * b;
//     }
// };
// console.log(calculator.add(2,3));
// console.log(calculator.sub(3,2));
// console.log(calculator.mul(2,3));
// console.log(calculator.num);


// This keyword

// let student = {
//     name : "Mridul",
//     age : 20,
//     eng: 90,
//     math : 97,
//     phy : 93,
//     avgmarks(){
//         let avg = (this.eng + this.math + this.phy)/3;
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }
// }
// student.avgmarks();

// Try and Catch

// console.log("hello");
// try{
//     console.log(a);
// }catch(error){
//     console.log("caught an error .. a is not defined");
//     console.log(error);
// }
// console.log("hello");
// console.log("hello");
// console.log("hello");



// <-------- Miscellaneaes topics --------->

// Arrow Function

// const sum = (a,b) => {
//     console.log(a+b);
// };
// sum(3,4);

// const cube = (n) => {
//     return n*n*n;
// }
// console.log(cube(3));

// let pow = (a,b) =>{
//     return a ** b;
// }
// console.log(pow(2,3));

// SetTimeout function

// console.log("hello")

// setTimeout( () =>{
//     console.log("Mridul");
// } , 4000);
// console.log("hi");


// SetInterval function

let id = setInterval( () =>{
    console.log("Mridul");
} , 2000);
clearInterval(id);