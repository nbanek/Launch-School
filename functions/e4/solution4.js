function factorial(number){
  if(number === 1){
    return number;
  }
  else{
    return number * factorial(number - 1);
  }
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));