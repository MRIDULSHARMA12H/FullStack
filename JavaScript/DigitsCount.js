let number = 287152;
let count = 0;
while(number >0){
    count++;
    number = Math.floor(number/10); //this is for remove the last digit
}
console.log(count);