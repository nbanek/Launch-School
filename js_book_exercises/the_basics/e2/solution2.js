let number = 4936;

//1.
let ones = number % 4930;
console.log(ones);

//2.
number -= ones;
number /= 10;
let tens = number % 490;
console.log(tens);

//3.
number -= tens;
number /= 10;
let hundreds = number % 40;
console.log(hundreds);

//4.
number -= hundreds;
number /= 10;
console.log(number);
