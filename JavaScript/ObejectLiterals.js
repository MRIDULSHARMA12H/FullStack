// let student ={
//     name : "Mridul",
//     age : 20,
//     marks : [80 , 90 , 70]
// };

// let mark = "marks";
// console.log(student[mark]);
// console.log(student.marks);

// Add / update value
// let students = {
//     name : "Mridul Sharma",
//     age : 22,
//     marks : 90.2,
//     city : "Delhi"
// };

// console.log(students.city);
// students.city = "Mumbai";
// console.log(students.city);

// Add

// students.gender = "male";
// console.log(students);
// console.log(students.gender);

//  Update

// students.marks = "A";
// console.log(students.marks);

// object of object 

// let classInfo ={
//     Aman: {
//         Grade :"A",
//         City : "Mumbai"
//     },
//     Mridul : {
//         Grade : "A+",
//         City : "Pune"
//     },
//     Karan : {
//         Grade : "B",
//         City : "Delhi"
//     }
// };
// console.log(classInfo);
// console.log(classInfo.Mridul);
// console.log(classInfo.Mridul.City);
// // to update
// classInfo.Mridul.City = "Himachal";
// console.log(classInfo.Mridul.City);
// console.log(classInfo.Mridul);



// Array of object

// const classinfo =[
//     {
//         name : "Mridul",
//         grade : "A",
//         city : "pune"
//     },
//     {
//         name : "Karan",
//         grade : "A+",
//         city : "Mumbai"
//     },
//     {
//         name : "Aman",
//         grade : "B",
//         city : "Delhi"
//     }
// ];
// console.log(classinfo[0].name);

// for(let i = 0 ; i<classinfo.length ; i++){  // add value
//     classinfo[i].gender = "male";
// }
// console.log(classinfo);


// Math object
// let num = Math.random();   // Math.randon gives random value 0 to 10 
// console.log(num);
// num = num*10;
// console.log(num);
// num = Math.floor(num);
// console.log(num);
// num += 1;
// console.log(num);

// genrate a random number between 1 to 100

// let n = (Math.random() *100)+1;
// console.log(Math.floor(n));



// guess game 
const max = prompt("enter the max number");
const random = Math.floor(Math.random()*max)+1;

let guess = prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("you quit the game.");
        break;
    }
    if(guess == random){
        console.log("Congratulation you guess is correct number!");
        break;
    }
    if(guess < random){
        guess = prompt("your guess is small , Please try again");
    }
    if(guess > random){
        guess = prompt("your guess is grater than random , please try again");
    }
};
