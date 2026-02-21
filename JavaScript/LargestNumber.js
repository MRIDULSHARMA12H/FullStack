let arr = [100 , 20 ,300 , 150];

let largest = arr[0];
let secl = arr[0];
for(let i = 0 ; i< arr.length ; i++){
    if(largest < arr[i]){
        largest = arr[i];
    }
    if(secl < arr[i] && arr[i] != largest){
        secl = arr[i];
    }
}
console.log(largest);
console.log(secl);