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
function AvgOFnumber(a,b,c){
    let avg = (a+b+c)/3;
    console.log(avg);
};
console.log(AvgOFnumber(2,4,6));