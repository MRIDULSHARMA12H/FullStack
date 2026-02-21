let number = 287152;
let sum = 0;

while(number > 0){
    let lastdigit = number%10;
    sum+= lastdigit;
    number = Math.floor(number/10);
}
console.log(sum);