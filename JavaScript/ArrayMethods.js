// let arr = [1,2,3,4];
// // let print = function  (el){
// //     console.log(el);
// // }

// // arr.forEach(print);

// // arr.forEach(function(el) {
// //     console.log(el);
// // });


// let arrr = [
//     {
//         name : "Mridul",
//         marks : 50,
//     },
//     {
//         name: "aman",
//         marks: 63,
//     },
//     {
//         name : "smamm",
//         marks : 75.24,
//     }
// ];
// // arrr.forEach((student) =>{
// //     console.log(student.marks);
// // });

// // Map method 
// // let tripple = arr.map((el) =>{
// //     return el*3
// // });
// // console.log(tripple);

// let gpa = arrr.map(function(el){
//     return Math.floor(el.marks/10);
// });

// console.log(gpa);

//  Filter method

// let num = [1,2,3,4,5,6,7,8,9,10,11];

// let even = num.filter(function(el){
//     return el % 2 == 0;   // they return true and false
// });
// let odd = num.filter((el) => {
//     return el % 2 == 1;
// });


// for(let i =0 ; i<even.length ; i++){
//     // console.log("even numbers :");
//     console.log(even[i]);
// };
// for(let i =0 ; i<odd.length ; i++){
//     // console.log("odd numbers :");
//     console.log(odd[i]);
// };


// Every Method 
// let num1 = [1,2,3,4,5];
// console.log(num1.every((el) => el% 2 ==0));
// let num2 = [2,4,6,8];
// console.log(num2.every((el) => el% 2 ==0));


// Reducer method they return single value from the array

// let arr = [1,2,3,4];

// console.log(arr.reduce(function(res,el) {
//     return(res+el);
// }));

// console.log(arr.reduce((res , el) => (res*el)));

// find maximum 
// let num = [3,4,2,6,2,7,8,2,9,4,4];

// let ans = num.reduce((max,el) =>
// {
//     if(max <el){
//         return el;
//     }
//     else{
//         return max;
//     }
// });
// //  for minimum
// let ans2 = num.reduce((min , el) =>{
//     if(min < el){
//         return min;
//     }else{
//         return el;
//     }
// });


// console.log(ans);
// console.log(ans2);


// Check if arrays element multiple of 10 or not

let arr = [1,2,3,4,5,6];
 
let res = arr.every((el)=> {
    return el % 10 == 0;
});
console.log(res);